import type { SchoolApiService } from "@school/services/ApiService";
import { schoolApiService } from "@school/services/ApiService";

export class SchoolHistoryService {
    private apiService: SchoolApiService;

    constructor(apiService: SchoolApiService) {
        this.apiService = apiService;
    }

    async fetchHistory() {
        return this.apiService.fetchHistory();
    }
}

export const schoolHistoryService = new SchoolHistoryService(schoolApiService);