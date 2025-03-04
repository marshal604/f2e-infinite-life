import { EventService } from '@services/EventService';
import { schoolApiService } from '@school/services/ApiService';

export const schoolEventService = new EventService(schoolApiService);
