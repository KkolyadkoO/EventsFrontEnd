import {memberOfEvent} from "./MemberOfEvent";

export  interface UserEvent {
    id: string;
    title: string;
    description: string;
    date: string;
    location: string;
    categoryId: string;
    maxNumberOfMembers: number;
    membersOfEvent: memberOfEvent[];
    imageUrl: string;
}