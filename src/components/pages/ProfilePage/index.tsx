import Header from '../../Header';
import Footer from '../../Footer';
import "./styles.css"
import {Link, useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import {EventsService} from "../../../api/services/EventsService";
import EventCard from "../../EventCard";
import {EventsResponse} from "../../../types/response/EventsResponse";

const HomePage = () => {
    const {store} = useContext(Context);
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("accessToken")){
           store.checkAuth();
        }
        if(!store.isAuth)
            navigate("/login");
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



            </div>
            <Footer/>
        </div>
    );
}

export default observer(HomePage);
