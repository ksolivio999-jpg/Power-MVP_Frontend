import { apiClient } from './client';

export interface CreateUserDto {
  /** User full name */
  name: string;
  /** User email address */
  email: string;
  /** User password (minimum 8 characters) */
  password: string;
}

export interface UpdateUserDto {
  /** User full name */
  name?: string;
  /** User email address */
  email?: string;
  /** User password (minimum 8 characters) */
  password?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export const usersApi = {
  /**
   * Create a new user
   * POST /api/users
   */
  create: async (data: CreateUserDto): Promise<User> => {
    return apiClient.post<User>('/users', data);
  },

  /**
   * Get all users
   * GET /api/users
   */
  getAll: async (): Promise<User[]> => {
    return apiClient.get<User[]>('/users');
  },

  /**
   * Get a user by ID
   * GET /api/users/{id}
   */
  getById: async (id: string): Promise<User> => {
    return apiClient.get<User>(`/users/${id}`);
  },

  /**
   * Update a user
   * PATCH /api/users/{id}
   */
  update: async (id: string, data: UpdateUserDto): Promise<User> => {
    return apiClient.patch<User>(`/users/${id}`, data);
  },

  /**
   * Delete a user
   * DELETE /api/users/{id}
   */
  delete: async (id: string): Promise<void> => {
    return apiClient.delete<void>(`/users/${id}`);
  },
};
