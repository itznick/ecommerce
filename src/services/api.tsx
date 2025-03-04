import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.in/api/",
});

export const fetchLimitedProducts = async (limit: number) => {
  const response = await api.get(`products?limit=${limit}`);
  return response.data.products;
};

export const fetchAllProducts = async () => {
  const response = await api.get("products");
  return response.data.products;
};
