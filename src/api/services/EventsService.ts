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
}