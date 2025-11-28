import { apiClient } from './client';

export interface CreateCircuitDto {
  /** ID of the breaker this circuit is connected to */
  breakerId: string;
  /** Circuit name or identifier */
  name: string;
  /** Room or area the circuit serves */
  room?: string;
  /** Description of the electrical load */
  loadDescription?: string;
  /** Whether this is a dedicated circuit */
  isDedicated?: boolean;
  /** Additional notes about the circuit */
  notes?: string;
}

export interface UpdateCircuitDto {
  /** ID of the breaker this circuit is connected to */
  breakerId?: string;
  /** Circuit name or identifier */
  name?: string;
  /** Room or area the circuit serves */
  room?: string;
  /** Description of the electrical load */
  loadDescription?: string;
  /** Whether this is a dedicated circuit */
  isDedicated?: boolean;
  /** Additional notes about the circuit */
  notes?: string;
}

export interface Circuit {
  id: string;
  breakerId: string;
  name: string;
  room?: string;
  loadDescription?: string;
  isDedicated: boolean;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export const circuitsApi = {
  /**
   * Create a new electrical circuit
   * POST /api/circuits
   */
  create: async (data: CreateCircuitDto): Promise<Circuit> => {
    return apiClient.post<Circuit>('/circuits', data);
  },

  /**
   * Get all circuits or filter by breaker/dedicated status
   * GET /api/circuits?breakerId={breakerId}&dedicated={true|false}
   */
  getAll: async (breakerId?: string, dedicated?: boolean): Promise<Circuit[]> => {
    const params = new URLSearchParams();
    if (breakerId) params.append('breakerId', breakerId);
    if (dedicated !== undefined) params.append('dedicated', dedicated.toString());
    const query = params.toString() ? `?${params.toString()}` : '';
    return apiClient.get<Circuit[]>(`/circuits${query}`);
  },

  /**
   * Get a circuit by ID
   * GET /api/circuits/{id}
   */
  getById: async (id: string): Promise<Circuit> => {
    return apiClient.get<Circuit>(`/circuits/${id}`);
  },

  /**
   * Update a circuit
   * PATCH /api/circuits/{id}
   */
  update: async (id: string, data: UpdateCircuitDto): Promise<Circuit> => {
    return apiClient.patch<Circuit>(`/circuits/${id}`, data);
  },

  /**
   * Delete a circuit
   * DELETE /api/circuits/{id}
   */
  delete: async (id: string): Promise<void> => {
    return apiClient.delete<void>(`/circuits/${id}`);
  },
};
