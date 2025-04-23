import { useQuery } from "@tanstack/react-query";
import { fetchAllProducts } from "../../services/api";
import { motion } from "framer-motion";
import { useEffect, useState, useMemo, useRef } from "react";
import { Product } from "../../interfaces/product.types";
import { SearchListProps } from "../../interfaces/search.types";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/slices/modalSlice";
import { useNavigate } from "react-router-dom";

const SearchList = ({
  searchQuery,
  setSearchQuery,
  setIsVisible,
  classname,
}: SearchListProps) => {
  const { data, isLoading, isError } = useQuery<Product[]>({
    queryKey: ["all-products"],
    queryFn: fetchAllProducts,
    staleTime: 1000 * 60 * 10,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [debouncedQuery, setDebouncedQuery] = useState(searchQuery);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(searchQuery), 500);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const filtered = useMemo(() => {
    if (!data || !debouncedQuery?.trim()) return [];

    const lowercasedQuery = debouncedQuery?.toLowerCase();

    return data.filter((product) => {
      const title = product.title?.toLowerCase() || "";
      const brand = product.brand?.toLowerCase() || "";
      const model = product.model?.toLowerCase() || "";
      const category = product.category?.toLowerCase() || "";

      return (
        title.includes(lowercasedQuery) ||
        brand.includes(lowercasedQuery) ||
        model.includes(lowercasedQuery) ||
        category.includes(lowercasedQuery)
      );
    });
  }, [data, debouncedQuery]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!filtered || filtered.length === 0) return;

      if (e.key === "ArrowDown") {
        setActiveIndex((prev) => (prev + 1) % filtered.length);
      } else if (e.key === "ArrowUp") {
        setActiveIndex(
          (prev) => (prev - 1 + filtered.length) % filtered.length
        );
      } else if (e.key === "Enter") {
        const selected = filtered[activeIndex];
        dispatch(openModal(selected.id));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [filtered, activeIndex, dispatch]);

  useEffect(() => {
    if (!scrollRef.current) return;

    const selectedItem = scrollRef.current.querySelector(
      `[data-index='${activeIndex}']`
    ) as HTMLElement;

    if (selectedItem) {
      selectedItem.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [activeIndex]);

  return (
    <>
      <div
        className="fixed inset-0 bg-black opacity-70 z-40"
        onClick={() => {
          setSearchQuery?.("");
          setIsVisible?.(false);
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className={`mt-2 w-[90%] bg-white border rounded shadow-lg max-h-60 lg:max-h-90 overflow-y-auto z-50 ${classname}`}
        ref={scrollRef}
      >
        {isLoading ? (
          <div className="p-4 text-center text-gray-500">Loading...</div>
        ) : isError ? (
          <div className="p-4 text-center text-red-500">
            Error fetching results.
          </div>
        ) : filtered.length === 0 ? (
          <div className="p-4 text-center text-gray-500">
            No products found.
          </div>
        ) : (
          <ul className="divide-y divide-gray-200">
            {filtered.map((product, index) => (
              <li
                key={product.id}
                data-index={index}
                onClick={() => {
                  setSearchQuery?.("");
                  dispatch(openModal(product.id));
                  setIsVisible?.(false);
                }}
                className={`flex items-center gap-3 p-3 cursor-pointer text-sm sm:text-base transition-colors ${
                  index === activeIndex ? "bg-gray-100" : "hover:bg-gray-50"
                }`}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-10 h-10 object-cover rounded-md"
                />
                <div className="flex-1">
                  <p className="font-medium line-clamp-1">{product.title}</p>
                  <p className="text-xs text-gray-500">${product.price}</p>
                </div>
              </li>
            ))}

            <li
              className="p-3 text-center text-blue-600 text-sm hover:underline cursor-pointer"
              onClick={() => {
                navigate("/category/all");
                setSearchQuery?.("");
                setIsVisible?.(false);
              }}
            >
              View all results →
            </li>
          </ul>
        )}
      </motion.div>
    </>
  );
};

export default SearchList;
