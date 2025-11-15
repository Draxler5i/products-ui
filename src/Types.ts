export interface User {
  id: number;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface Product {
  id: number;
  name: string;
  description: string | null;
  price: number;
  active: boolean;
  createdBy: number;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface LoginData {
  email: string;
  password: string;
} 

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export interface ProductFormData {
  name: string;
  description: string | null;
  price: number;
  active: boolean;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  user: User;
  token: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  count?: number;
}
