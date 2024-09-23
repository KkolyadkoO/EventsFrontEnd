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

    static async getEventsByFilter(title: string, locationId: string, startDate: string, endDate: string,
                                   category: string, userId: string, page: string, pageSize: string): Promise<AxiosResponse<FilteredEventsResponse>> {
        return $api.get<FilteredEventsResponse>('/Events/filter', {
            params: {
                title, locationId, startDate, endDate, category, userId, page, pageSize
            }
        });
    }

    static async updateEvent(id: string, title:string, description: string, date:string, locationId:string,
                             maxNumberOfMembers: number, categoryId: string, imageUrl: string): Promise<AxiosResponse<string>> {
        return $api.put(`Events/${id}`, {title, description, date, locationId, maxNumberOfMembers, categoryId, imageUrl});
    }

    static async addEvent(title:string, description: string, date:string, locationId:string,
                             maxNumberOfMembers: number, categoryId: string, imageUrl: string): Promise<AxiosResponse<string>> {
        return $api.post(`Events`, {title, description, date, locationId, maxNumberOfMembers, categoryId, imageUrl});
    }

    static async deleteEvent(id: string): Promise<AxiosResponse<void>> {
        return $api.delete(`/Events/${id}`);
    }

}