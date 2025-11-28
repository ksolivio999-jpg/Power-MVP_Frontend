import { apiClient } from './client';

export interface CreatePanelDto {
  /** ID of the project this panel belongs to */
  projectId: string;
  /** ID of the floor this panel is located on */
  floorId: string;
  /** ID of parent panel if this is a sub-panel */
  parentPanelId?: string;
  /** Panel name or identifier */
  name: string;
  /** Physical location of the panel */
  location?: string;
  /** Total number of breaker spaces in panel */
  totalSpaces?: number;
  /** URL to panel photo */
  photoUrl?: string;
  /** QR code slug for quick access */
  qrSlug?: string;
  /** Additional notes about the panel */
  notes?: string;
}

export interface UpdatePanelDto {
  /** ID of the project this panel belongs to */
  projectId?: string;
  /** ID of the floor this panel is located on */
  floorId?: string;
  /** ID of parent panel if this is a sub-panel */
  parentPanelId?: string;
  /** Panel name or identifier */
  name?: string;
  /** Physical location of the panel */
  location?: string;
  /** Total number of breaker spaces in panel */
  totalSpaces?: number;
  /** URL to panel photo */
  photoUrl?: string;
  /** QR code slug for quick access */
  qrSlug?: string;
  /** Additional notes about the panel */
  notes?: string;
}

export interface Panel {
  id: string;
  projectId: string;
  floorId: string;
  parentPanelId?: string;
  name: string;
  location?: string;
  totalSpaces?: number;
  photoUrl?: string;
  qrSlug?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export const panelsApi = {
  /**
   * Create a new electrical panel
   * POST /api/panels
   */
  create: async (data: CreatePanelDto): Promise<Panel> => {
    return apiClient.post<Panel>('/panels', data);
  },

  /**
   * Get all panels or filter by project/floor
   * GET /api/panels?projectId={projectId}&floorId={floorId}
   */
  getAll: async (projectId?: string, floorId?: string): Promise<Panel[]> => {
    const params = new URLSearchParams();
    if (projectId) params.append('projectId', projectId);
    if (floorId) params.append('floorId', floorId);
    const query = params.toString() ? `?${params.toString()}` : '';
    return apiClient.get<Panel[]>(`/panels${query}`);
  },

  /**
   * Get panel by QR code slug
   * GET /api/panels/qr/{slug}
   */
  getByQrSlug: async (slug: string): Promise<Panel> => {
    return apiClient.get<Panel>(`/panels/qr/${slug}`);
  },

  /**
   * Get a panel by ID
   * GET /api/panels/{id}
   */
  getById: async (id: string): Promise<Panel> => {
    return apiClient.get<Panel>(`/panels/${id}`);
  },

  /**
   * Update a panel
   * PATCH /api/panels/{id}
   */
  update: async (id: string, data: UpdatePanelDto): Promise<Panel> => {
    return apiClient.patch<Panel>(`/panels/${id}`, data);
  },

  /**
   * Delete a panel
   * DELETE /api/panels/{id}
   */
  delete: async (id: string): Promise<void> => {
    return apiClient.delete<void>(`/panels/${id}`);
  },
};
