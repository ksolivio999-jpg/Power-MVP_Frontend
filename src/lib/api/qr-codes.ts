import { apiClient } from './client';

// Define QR code types
export interface QRCode {
  id: string;
  locationId: string;
  panelId?: string;
  url: string;
  qrCodeUrl: string;
  type: 'location' | 'panel';
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface GenerateQRCodeData {
  locationId: string;
  panelId?: string;
  type: 'location' | 'panel';
}

export const qrCodeApi = {
  /**
   * Get all QR codes for a location
   */
  getByLocation: async (locationId: string): Promise<QRCode[]> => {
    return apiClient.get<QRCode[]>(`/locations/${locationId}/qr-codes`);
  },

  /**
   * Get a single QR code by ID
   */
  getById: async (id: string): Promise<QRCode> => {
    return apiClient.get<QRCode>(`/qr-codes/${id}`);
  },

  /**
   * Generate a new QR code
   */
  generate: async (data: GenerateQRCodeData): Promise<QRCode> => {
    return apiClient.post<QRCode>('/qr-codes', data);
  },

  /**
   * Toggle QR code active status
   */
  toggleActive: async (id: string): Promise<QRCode> => {
    return apiClient.patch<QRCode>(`/qr-codes/${id}/toggle`);
  },

  /**
   * Delete a QR code
   */
  delete: async (id: string): Promise<void> => {
    return apiClient.delete<void>(`/qr-codes/${id}`);
  },
};
