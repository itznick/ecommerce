import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.in/api/",
});

export const fetchLimitedProducts = async (limit: number) => {
  try {
    const response = await api.get(`products?limit=${limit}`);
    return response.data.products;
  } catch (error) {
    console.error("Error fetching limited products", error);
    throw error;
  }
};

export const fetchAllProducts = async () => {
  try {
    const response = await api.get("products");
    return response.data.products;
  } catch (error) {
    console.error("Error fetching all products", error);
    throw error;
  }
};

export const fetchProductByCategory = async (category: string) => {
  try {
    const response = await api.get(`products/category?type=${category}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching products for category: ${category}`, error);
    throw error;
  }
};
