import { apiClient } from './client';

// Define panel types
export interface Panel {
  id: string;
  locationId: string;
  floorId?: string;
  name: string;
  model: string;
  voltage: string;
  phase: string;
  status: 'installed' | 'pending' | 'inactive';
  circuits: number;
  usedCircuits: number;
  availableSlots: number;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreatePanelData {
  locationId: string;
  floorId?: string;
  name: string;
  model: string;
  voltage: string;
  phase: string;
  circuits: number;
  notes?: string;
}

export interface UpdatePanelData extends Partial<Omit<CreatePanelData, 'locationId'>> {
  status?: 'installed' | 'pending' | 'inactive';
  usedCircuits?: number;
}

export const panelApi = {
  /**
   * Get all panels for a location
   */
  getByLocation: async (locationId: string): Promise<Panel[]> => {
    return apiClient.get<Panel[]>(`/locations/${locationId}/panels`);
  },

  /**
   * Get a single panel by ID
   */
  getById: async (id: string): Promise<Panel> => {
    return apiClient.get<Panel>(`/panels/${id}`);
  },

  /**
   * Create a new panel
   */
  create: async (data: CreatePanelData): Promise<Panel> => {
    return apiClient.post<Panel>('/panels', data);
  },

  /**
   * Update an existing panel
   */
  update: async (id: string, data: UpdatePanelData): Promise<Panel> => {
    return apiClient.patch<Panel>(`/panels/${id}`, data);
  },

  /**
   * Delete a panel
   */
  delete: async (id: string): Promise<void> => {
    return apiClient.delete<void>(`/panels/${id}`);
  },
};
