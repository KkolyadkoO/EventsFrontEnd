import './style.css'


const EventCard = () => {
    return (
        <div className="event-card">
            <img src="https://placehold.co/300x400" alt="{title}" className="event-image"/>
            <span className="event-title">Gay Parad</span>
            <span className="event-date">22 декабря 2024</span>
        </div>
    )
}

export default EventCard;