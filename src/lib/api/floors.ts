import { apiClient } from './client';

export interface CreateFloorDto {
  /** ID of the project this floor belongs to */
  projectId: string;
  /** Floor name or number */
  name: string;
  /** Display order index for the floor */
  orderIndex?: number;
}

export interface UpdateFloorDto {
  /** ID of the project this floor belongs to */
  projectId?: string;
  /** Floor name or number */
  name?: string;
  /** Display order index for the floor */
  orderIndex?: number;
}

export interface Floor {
  id: string;
  projectId: string;
  name: string;
  orderIndex: number;
  createdAt: string;
  updatedAt: string;
}

export const floorsApi = {
  /**
   * Create a new floor
   * POST /api/floors
   */
  create: async (data: CreateFloorDto): Promise<Floor> => {
    return apiClient.post<Floor>('/floors', data);
  },

  /**
   * Get all floors or floors by project
   * GET /api/floors?projectId={projectId}
   */
  getAll: async (projectId?: string): Promise<Floor[]> => {
    const query = projectId ? `?projectId=${projectId}` : '';
    return apiClient.get<Floor[]>(`/floors${query}`);
  },

  /**
   * Get a floor by ID
   * GET /api/floors/{id}
   */
  getById: async (id: string): Promise<Floor> => {
    return apiClient.get<Floor>(`/floors/${id}`);
  },

  /**
   * Update a floor
   * PATCH /api/floors/{id}
   */
  update: async (id: string, data: UpdateFloorDto): Promise<Floor> => {
    return apiClient.patch<Floor>(`/floors/${id}`, data);
  },

  /**
   * Delete a floor
   * DELETE /api/floors/{id}
   */
  delete: async (id: string): Promise<void> => {
    return apiClient.delete<void>(`/floors/${id}`);
  },
};
