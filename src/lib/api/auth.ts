import { apiClient } from './client';
import type { AuthResponse, LoginCredentials, LogoutResponse } from '@/types/auth';

export const authApi = {
  /**
   * User login with email and password
   * POST /api/auth/login
   */
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    return apiClient.post<AuthResponse>('/auth/login', credentials);
  },

  /**
   * User logout (requires authentication)
   * POST /api/auth/logout
   */
  logout: async (): Promise<LogoutResponse> => {
    return apiClient.post<LogoutResponse>('/auth/logout');
  },
};
