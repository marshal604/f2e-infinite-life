import { ApiService } from '@services/ApiService';

export const schoolApiService = new ApiService('/api/school');
export type SchoolApiService = typeof schoolApiService;