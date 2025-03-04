import type { EventResponse } from './types';
import axios from 'axios';
export class ApiService {
    private apiUrl: string;

    constructor(apiUrl: string) {
        this.apiUrl = apiUrl;
    }

    get axiosInstance() {
        return axios.create({
            baseURL: this.apiUrl,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    async fetchEvent<T>(attributes: T, choice: string): Promise<EventResponse> {
        const response = await this.axiosInstance.post('/generate_event', { attributes, choice });

        return response.data;
    }

    async fetchCharacter() {
        const response = await this.axiosInstance.get('/character');
        return response.data
    }

    async fetchHistory() {
        const response = await this.axiosInstance.get('/history');
        return response.data;
    }
}