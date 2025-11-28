/**
 * Central API exports
 * Import API modules from here for consistent usage across the app
 */

export { apiClient } from './client';
export { authApi } from './auth';
export { locationApi } from './locations';
export { panelApi } from './panels';
export { qrCodeApi } from './qr-codes';

// Re-export types
export type { Location, CreateLocationData, UpdateLocationData } from './locations';
export type { Panel, CreatePanelData, UpdatePanelData } from './panels';
export type { QRCode, GenerateQRCodeData } from './qr-codes';
