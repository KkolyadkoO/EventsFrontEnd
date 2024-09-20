import './styles.css';
import {EventsResponse} from "../../types/response/EventsResponse";
import {useState} from "react";

type Props = {
    event: EventsResponse;
}

const EventCard = ({event}: Props) => {
    const {title, imageUrl, date} = event;



    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        });
    };

    const formatImageUrl = (url:string): string => {
        if (url){
            url = url.replace(/\s+/g, "%20");
            return `${process.env.PUBLIC_URL}/images/${url}%20300.webp`;
        }
        return url
    };

    return (
        <div className="event-card">
            <img src={formatImageUrl(imageUrl) || "https://placehold.co/300x400"} alt={title} className="event-image"/>
            <span className="event-title">{title}</span>
            <span className="event-date">{formatDate(date)}</span>
        </div>
    )
}

export default EventCard;
