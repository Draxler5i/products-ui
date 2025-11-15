import type { AuthResponse, LoginData, RegisterData } from '../Types';
import api from './api';


export const authService = {
  async login(credentials: LoginData): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>('/auth/login', credentials);
    return response.data;
  },

  async register(userData: RegisterData): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>('/auth/register', userData);
    return response.data;
  },
};
