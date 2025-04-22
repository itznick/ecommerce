import axios from "axios";
import { Product } from "../interfaces/product.types";

const api = axios.create({
  baseURL: "https://fakestoreapi.in/api/",
});

export const fetchAllProducts = async (): Promise<Product[]> => {
  try {
    const response = await api.get("products?limit=150");
    return response.data.products;
  } catch (error) {
    console.error("Error fetching all products", error);
    throw error;
  }
};

export const fetchProductById = async (productId: number) => {
  try {
    const response = await api.get(`products/${productId}`);
    return response.data.product;
  } catch (error) {
    console.error("Error fetching product by ID", error);
    throw error;
  }
};

export const fetchProductsByPage = async (page: number) => {
  try {
    const response = await api.get(`products?page=${page}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products by page", error);
    throw error;
  }
};

export const fetchLimitedProducts = async (limit: number) => {
  try {
    const response = await api.get(`products?limit=${limit}`);
    return response.data.products;
  } catch (error) {
    console.error("Error fetching limited products", error);
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

export const fetchProductByCategoryDesc = async (category: string) => {
  try {
    const response = await api.get(
      `products/category?type=${category}&sort=desc`
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching products for category: ${category}`, error);
    throw error;
  }
};
