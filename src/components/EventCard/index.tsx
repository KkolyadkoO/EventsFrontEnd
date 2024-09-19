import './styles.css';
import { EventsResponse } from "../../types/response/EventsResponse";

type Props = {
    event: EventsResponse;
}

const EventCard = ({ event }: Props) => {

    const { title, imageUrl, date } = event;

    // Функция для форматирования даты
    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        });
    };

    return (
        <div className="event-card">
            <img src={imageUrl || "https://placehold.co/300x400"} alt={title} className="event-image" />
            <span className="event-title">{title}</span>
            <span className="event-date">{formatDate(date)}</span>
        </div>
    )
}

export default EventCard;
