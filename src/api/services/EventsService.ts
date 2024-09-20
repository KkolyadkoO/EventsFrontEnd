import $api from "../../http";
import { AxiosResponse } from "axios";
import {EventsResponse} from "../../types/response/EventsResponse";
import {FilteredEventsResponse} from "../../types/response/FilteredEventsResponse";

export class EventsService {
    static async getAllEvents(): Promise<AxiosResponse<EventsResponse[]>> {
        return $api.get<EventsResponse[]>('/Events');
    }

    static async getEventById(id: string | undefined): Promise<AxiosResponse<EventsResponse>> {
        return $api.get<EventsResponse>(`Events/${id}`);
    }

    static async getEventsByFilter(title: string, location: string, startDate: string, endDate: string,
                                   category: string, userId: string, page: string, pageSize: string): Promise<AxiosResponse<FilteredEventsResponse>> {
        return $api.get<FilteredEventsResponse>('/Events/filter', {
            params: {
                title, location, startDate, endDate, category, userId, page, pageSize
            }
        });
    }

}