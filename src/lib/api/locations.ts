import { apiClient } from './client';

// Define location types
export interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  totalPanels: number;
  installedPanels: number;
  pendingPanels: number;
  image?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateLocationData {
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  image?: string;
}

export interface UpdateLocationData extends Partial<CreateLocationData> {}

export const locationApi = {
  /**
   * Get all locations
   */
  getAll: async (): Promise<Location[]> => {
    return apiClient.get<Location[]>('/locations');
  },

  /**
   * Get a single location by ID
   */
  getById: async (id: string): Promise<Location> => {
    return apiClient.get<Location>(`/locations/${id}`);
  },

  /**
   * Create a new location
   */
  create: async (data: CreateLocationData): Promise<Location> => {
    return apiClient.post<Location>('/locations', data);
  },

  /**
   * Update an existing location
   */
  update: async (id: string, data: UpdateLocationData): Promise<Location> => {
    return apiClient.put<Location>(`/locations/${id}`, data);
  },

  /**
   * Delete a location
   */
  delete: async (id: string): Promise<void> => {
    return apiClient.delete<void>(`/locations/${id}`);
  },
};
