import { apiClient } from './client';
import type { AuthResponse, LoginCredentials, RegisterData, User } from '@/types/auth';

export const authApi = {
  /**
   * Login with email and password
   */
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    return apiClient.post<AuthResponse>('/auth/login', credentials);
  },

  /**
   * Register a new user
   */
  register: async (data: RegisterData): Promise<AuthResponse> => {
    return apiClient.post<AuthResponse>('/auth/register', data);
  },

  /**
   * Get current authenticated user
   */
  me: async (): Promise<User> => {
    return apiClient.get<User>('/auth/me');
  },

  /**
   * Logout (optional - can be client-side only)
   */
  logout: async (): Promise<void> => {
    return apiClient.post<void>('/auth/logout');
  },

  /**
   * Refresh token
   */
  refreshToken: async (): Promise<AuthResponse> => {
    return apiClient.post<AuthResponse>('/auth/refresh');
  },
};
