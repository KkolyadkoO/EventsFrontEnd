import Header from '../../Header';
import Footer from '../../Footer';
import "./styles.css"
import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import {EventsService} from "../../../api/services/EventsService";
import EventCard from "../../EventCard";
import {EventsResponse} from "../../../types/response/EventsResponse";

const HomePage = () => {
    const {store} = useContext(Context);
    const [events, setEvents] = useState<EventsResponse[]>([]);

    useEffect(() => {
        if (localStorage.getItem("accessToken")){
           store.checkAuth();
        }
        const fetchEvents = async () => {
            try {
                const response = await EventsService.getAllEvents();
                setEvents(response.data);
                console.log(response.data);

            }   catch (e){
                console.error(e);
            }

        }
        fetchEvents();
    }, []);

    if (store.isLoading){
        return (
            <div>...Loading</div>
        );
    }

    return (

        <div className='wrapper'>
            <Header/>
            <div className='content'>
                {/*<h1>{store.isAuth ? `Пользователь авторизован ${store.user.userName}` : 'Авторизуйтесь'}</h1>*/}

                <div className="events">
                    {events.map(event => (
                        <Link to={`/view_event/${event.id}`}  draggable={"false"}>
                            <EventCard key={event.id} event={event}/>
                        </Link>
                    ))}
                </div>

            </div>
            <Footer/>
        </div>
    );
}

export default observer(HomePage);
