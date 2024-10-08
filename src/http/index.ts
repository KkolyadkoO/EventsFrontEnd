import axios from "axios";
import {AuthResponse} from "../types/response/AuthResponse";

export const API_URL = "http://localhost:5163/api";

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
    return config;
})


$api.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/Auth/refresh`, {withCredentials: true});
            localStorage.setItem('accessToken', response.data.tokensResponse.accessToken);
            return $api.request(originalRequest);
        } catch (e) {
            console.log('Не авторизован');
        }
    }
    throw error;
});


export default $api;