import Header from "../../Header";
import Footer from "../../Footer";
import InformationOfEvent from "../../InformationAboutEvent";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {EventsService} from "../../../api/services/EventsService";
import {EventsResponse} from "../../../types/response/EventsResponse";
import {CategoryOfEventResponse} from "../../../types/response/CategoryOfEventResponse";
import {CategoryOfEventService} from "../../../api/services/CategoryOfEventService";

const ViewEvent = () => {
    const { id } = useParams<{ id: string }>();
    const [event, setEvent] = useState<EventsResponse | null>(null);
    const [category, setCategory] = useState<CategoryOfEventResponse | null>(null);
    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await EventsService.getEventById(id);
                setEvent(response.data);
            } catch (e) {
                console.error(e);
            }
        };

        if (id) {
            fetchEvent();
        }
    }, [id]);

    useEffect(() => {
        const fetchCategory = async (categoryId: string) => {
            try {
                const response = await CategoryOfEventService.getCategoryById(categoryId);
                setCategory(response.data);
            } catch (e) {
                console.error(e);
            }
        };

        if (event?.categoryId) {
            fetchCategory(event.categoryId);
        }
    }, [event]);
    return (
        <div className='wrapper'>
            <Header />
            <div className='content'>
                {event && category ? <InformationOfEvent event={event} category={category} /> : <p>Loading...</p>}
            </div>
            <Footer />
        </div>
    );
}

export default ViewEvent;