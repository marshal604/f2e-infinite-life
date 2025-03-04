import type { SchoolApiService } from "@school/services/ApiService";
import { schoolApiService } from "@school/services/ApiService";

export class SchoolCharacterService {
    private apiService: SchoolApiService;

    constructor(apiService: SchoolApiService) {
        this.apiService = apiService;
    }

    async fetchCharacter() {
      return this.apiService.fetchCharacter();
    }
};

export const schoolCharacterService = new SchoolCharacterService(schoolApiService);
  