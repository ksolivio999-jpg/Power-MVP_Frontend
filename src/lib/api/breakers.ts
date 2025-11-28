import { apiClient } from './client';

export interface CreateBreakerDto {
  /** ID of the panel this breaker belongs to */
  panelId: string;
  /** Position/slot number in the panel */
  position: number;
  /** Number of poles (1=Single, 2=Double, 3=Triple) */
  poles: number;
  /** Breaker amperage rating */
  amperage: number;
  /** Breaker type */
  type: string;
  /** ID of sub-panel this breaker feeds (if applicable) */
  feedsPanelId?: string;
  /** Additional notes about the breaker */
  notes?: string;
}

export interface UpdateBreakerDto {
  /** ID of the panel this breaker belongs to */
  panelId?: string;
  /** Position/slot number in the panel */
  position?: number;
  /** Number of poles (1=Single, 2=Double, 3=Triple) */
  poles?: number;
  /** Breaker amperage rating */
  amperage?: number;
  /** Breaker type */
  type?: string;
  /** ID of sub-panel this breaker feeds (if applicable) */
  feedsPanelId?: string;
  /** Additional notes about the breaker */
  notes?: string;
}

export interface Breaker {
  id: string;
  panelId: string;
  position: number;
  poles: number;
  amperage: number;
  type: string;
  feedsPanelId?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export const breakersApi = {
  /**
   * Create a new circuit breaker
   * POST /api/breakers
   */
  create: async (data: CreateBreakerDto): Promise<Breaker> => {
    return apiClient.post<Breaker>('/breakers', data);
  },

  /**
   * Get all breakers or filter by panel
   * GET /api/breakers?panelId={panelId}
   */
  getAll: async (panelId?: string): Promise<Breaker[]> => {
    const query = panelId ? `?panelId=${panelId}` : '';
    return apiClient.get<Breaker[]>(`/breakers${query}`);
  },

  /**
   * Get a breaker by ID
   * GET /api/breakers/{id}
   */
  getById: async (id: string): Promise<Breaker> => {
    return apiClient.get<Breaker>(`/breakers/${id}`);
  },

  /**
   * Update a breaker
   * PATCH /api/breakers/{id}
   */
  update: async (id: string, data: UpdateBreakerDto): Promise<Breaker> => {
    return apiClient.patch<Breaker>(`/breakers/${id}`, data);
  },

  /**
   * Delete a breaker
   * DELETE /api/breakers/{id}
   */
  delete: async (id: string): Promise<void> => {
    return apiClient.delete<void>(`/breakers/${id}`);
  },
};
