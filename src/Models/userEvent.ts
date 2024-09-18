import {memberOfEvent} from "./memberOfEvent";

export  interface UserEvent {
    id: string;
    title: string;
    description: string;
    date: string;
    location: string;
    categoryId: string;
    maxNumberOfMembers: number;
    membersOfEmail: memberOfEvent[];
    imageUrl: string;
}