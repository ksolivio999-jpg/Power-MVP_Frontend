/**
 * Central API exports
 * Import API modules from here for consistent usage across the app
 */

export { apiClient } from './client';
export { authApi } from './auth';
export { usersApi } from './users';
export { projectsApi } from './projects';
export { floorsApi } from './floors';
export { panelsApi } from './panels';
export { breakersApi } from './breakers';
export { circuitsApi } from './circuits';

// Re-export types
export type { AuthResponse, LoginCredentials, LogoutResponse } from '@/types/auth';
export type { User, CreateUserDto, UpdateUserDto } from './users';
export type { Project, CreateProjectDto, UpdateProjectDto } from './projects';
export type { Floor, CreateFloorDto, UpdateFloorDto } from './floors';
export type { Panel, CreatePanelDto, UpdatePanelDto } from './panels';
export type { Breaker, CreateBreakerDto, UpdateBreakerDto } from './breakers';
export type { Circuit, CreateCircuitDto, UpdateCircuitDto } from './circuits';
