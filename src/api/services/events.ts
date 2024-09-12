export interface EventsRequest {
    title: string;
    description: string;
    date: string;
    location: string;
    maxNumberOfMembers: number;
    categoryId: string;
    imageUrl: string;
}

export interface FilterResponse {
    title: string;
    location: string;
    startDate: string;
    endDate: string;
    categoryId: string;
}




export const getAllEvents = async () => {
    const response = await fetch("http://localhost:5163/Events");
    return response.json();
};

export const getEventId = async () => {
    await fetch("http://localhost:5163/Events/${id}");
};

export const getEventsByFilter = async (filterRequest: FilterResponse) => {
    await fetch("http://localhost:5163/Events/", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({filterRequest}),
    });
};

export const createEvent = async (eventRequest: EventsRequest) => {
    await fetch("http://localhost:5163/Events", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(eventRequest),
    });
};

export const updateEvent = async (id:string, eventRequest: EventsRequest) => {
    await fetch(`http://localhost:5163/Events/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(eventRequest),
    });
};

export const deleteEvent = async (id:string, eventRequest: EventsRequest) => {
    await fetch(`http://localhost:5163/Events/${id}`, {
        method: "DELETE",
    });
};