import { ApiService } from '@services/ApiService';

export class EventService {
  private apiService: ApiService;

  constructor(apiService: ApiService) {
    this.apiService = apiService;
  }

  async generateEvent(attributes: any, choice: string) {
    return this.apiService.fetchEvent(attributes, choice);
  }
}
