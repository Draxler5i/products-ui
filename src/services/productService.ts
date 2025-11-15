import api from './api';
import type { ApiResponse, Product, ProductFormData } from '../Types';

export const productService = {
  async getAllProducts(): Promise<ApiResponse<Product[]>> {
    const response = await api.get<ApiResponse<Product[]>>('/products');
    return response.data;
  },

  async getProductById(id: number): Promise<ApiResponse<Product>> {
    const response = await api.get<ApiResponse<Product>>(`/products/${id}`);
    return response.data;
  },

  async createProduct(productData: ProductFormData): Promise<ApiResponse<Product>> {
    const response = await api.post<ApiResponse<Product>>('/products', productData);
    return response.data;
  },

  async updateProduct(id: number, productData: Partial<ProductFormData>): Promise<ApiResponse<Product>> {
    const response = await api.put<ApiResponse<Product>>(`/products/${id}`, productData);
    return response.data;
  },

  async deleteProduct(id: number): Promise<ApiResponse<{ id: number }>> {
    const response = await api.delete<ApiResponse<{ id: number }>>(`/products/${id}`);
    return response.data;
  },

  async getMyProducts(): Promise<ApiResponse<Product[]>> {
    const response = await api.get<ApiResponse<Product[]>>('/products/my-products');
    return response.data;
  },
};
