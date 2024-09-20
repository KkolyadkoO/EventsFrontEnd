import $api from "../../http";
import { AxiosResponse } from "axios";
import {EventsResponse} from "../../types/response/EventsResponse";

export class EventsService {
    static async getAllEvents(): Promise<AxiosResponse<EventsResponse[]>> {
        return $api.get<EventsResponse[]>('/Events');
    }

    static async getEventById(id: string | undefined): Promise<AxiosResponse<EventsResponse>> {
        return $api.get<EventsResponse>(`Events/${id}`);
    }

    static async getEventsByFilter(title: string, location: string, startDate: string, endDate: string,
                                   category: string, page: string, pageSize: string): Promise<AxiosResponse<EventsResponse[]>> {
        return $api.get<EventsResponse[]>('/Events/filter', {
            params: {
                title, location, startDate, endDate, category, page, pageSize
            }
        });
    }

}