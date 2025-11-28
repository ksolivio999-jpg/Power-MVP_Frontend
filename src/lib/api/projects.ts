import { apiClient } from './client';

export interface CreateProjectDto {
  /** ID of the user who owns this project */
  userId: string;
  /** Project name */
  name: string;
  /** Project address */
  address?: string;
  /** Additional notes about the project */
  notes?: string;
}

export interface UpdateProjectDto {
  /** ID of the user who owns this project */
  userId?: string;
  /** Project name */
  name?: string;
  /** Project address */
  address?: string;
  /** Additional notes about the project */
  notes?: string;
}

export interface Project {
  id: string;
  userId: string;
  name: string;
  address?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export const projectsApi = {
  /**
   * Create a new project
   * POST /api/projects
   */
  create: async (data: CreateProjectDto): Promise<Project> => {
    return apiClient.post<Project>('/projects', data);
  },

  /**
   * Get all projects or projects by user
   * GET /api/projects?userId={userId}
   */
  getAll: async (userId?: string): Promise<Project[]> => {
    const query = userId ? `?userId=${userId}` : '';
    return apiClient.get<Project[]>(`/projects${query}`);
  },

  /**
   * Get a project by ID
   * GET /api/projects/{id}
   */
  getById: async (id: string): Promise<Project> => {
    return apiClient.get<Project>(`/projects/${id}`);
  },

  /**
   * Update a project
   * PATCH /api/projects/{id}
   */
  update: async (id: string, data: UpdateProjectDto): Promise<Project> => {
    return apiClient.patch<Project>(`/projects/${id}`, data);
  },

  /**
   * Delete a project
   * DELETE /api/projects/{id}
   */
  delete: async (id: string): Promise<void> => {
    return apiClient.delete<void>(`/projects/${id}`);
  },
};
