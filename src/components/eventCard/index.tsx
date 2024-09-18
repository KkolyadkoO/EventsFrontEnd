import './style.css'
import {UserEvent} from "../../Models/userEvent";

type Props = {
    event: UserEvent;
}

const EventCard = ({event}:Props) => {

    const {title,description} = event;

    return (
        <div className="event-card">
            <img src="https://placehold.co/300x400" alt="{title}" className="event-image"/>
            <span className="event-title">{title}</span>
            <span className="event-date">22 декабря 2024</span>
        </div>
    )
}

export default EventCard;