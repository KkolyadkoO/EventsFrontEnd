import { memberOfEvent } from "./memberOfEvent"

export interface user {
    id: string;
    userName: string;
    userEmail: string;
    password: string;
    role: string;
    membersOfEmail: memberOfEvent[];
}