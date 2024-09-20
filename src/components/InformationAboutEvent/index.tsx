import './styles.css'
import {EventsResponse} from "../../types/response/EventsResponse";
import {CategoryOfEventResponse} from "../../types/response/CategoryOfEventResponse";
import {Context} from "../../index";
import {useContext} from "react";
import {useNavigate} from "react-router-dom";

type Props = {
    event: EventsResponse;
    category: CategoryOfEventResponse;
}


const InformationOfEvent = ({event, category}: Props) => {
    const { store } = useContext(Context);
    const navigate = useNavigate();

    if (!event) {
        return <p>No event information available</p>;
    }
    const {title, imageUrl, date, description, location, maxNumberOfMembers, numberOfMembers} = event;

    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        });
    };

    const handleOnClick = () => {
        if(!store.isAuth){
            navigate('/login');
        }
        else {
            navigate(`/registration_on_event/${event.id}`);
        }
    };

    return (
        <div className="information-of-event">
            <span className="title">{title}</span>
            <img className="image" src={imageUrl || "https://placehold.co/1280x720"} alt={title}/>
            <span className="description">{description}</span>
            <div className="info">
                <span className="info-text">{formatDate(date)}</span>
                <span className="info-text">{numberOfMembers}/{maxNumberOfMembers}</span>
            </div>
            <div className="info">
                <span className="info-text">{location}</span>
                <span className="info-text">{category.title}</span>
            </div>
            {(numberOfMembers === maxNumberOfMembers) ? (
                <button className="full-button">Full</button>
            ) : (
                <button className="sing-up" onClick={handleOnClick}>Sing up</button>
            )}

        </div>
    )
}

export default InformationOfEvent;