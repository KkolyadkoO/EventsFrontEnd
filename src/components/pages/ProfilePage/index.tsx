import Header from '../../Header';
import Footer from '../../Footer';
import "./styles.css"
import {useContext, useEffect, useState} from "react";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import {Link} from "react-router-dom";
import EventCard from "../../EventCard";
import {EventsResponse} from "../../../types/response/EventsResponse";
import {EventsService} from "../../../api/services/EventsService";

const ProfilePage = () => {
    const {store} = useContext(Context);
    const [events, setEvents] = useState<EventsResponse[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [pageSize, setPageSize] = useState(8);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await EventsService.getEventsByFilter("","","","","",store.user.id,currentPage.toString(),pageSize.toString());
                setEvents(response.data.events);
                const totalEventCount = Number(response.data.totalEventCount);
                setTotalPages(Math.ceil(totalEventCount / pageSize))
                console.log(response.data);
            }   catch (e){
                console.error(e);
            }
        }
        fetchEvents();
    }, [currentPage]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prevPage => prevPage + 1);
        }
        scrollToTop();
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
        scrollToTop();
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'  // для плавной прокрутки
        });
    };


    return (

        <div className='wrapper'>
            <Header/>
            <div className='profile-content'>
                <span className="userName">{store.user.userName}</span>
                <div className="events">
                    {events.map(event => (
                        <Link to={`/view_event/${event.id}`} draggable={"false"}>
                            <EventCard key={event.id} event={event}/>
                        </Link>
                    ))}
                </div>
                {totalPages > 1 && (<
                    div className="pagination">
                    <button onClick={handlePreviousPage} disabled={currentPage === 1}>Prev</button>
                    <span>{currentPage} of {totalPages}</span>
                    <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
                </div>
                )}


            </div>
            <Footer/>
        </div>
    );
}

export default observer(ProfilePage);
