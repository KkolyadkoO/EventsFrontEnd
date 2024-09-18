import Header from '../../Header';
import Footer from '../../Footer';
import "./styles.css"
import {Link} from "react-router-dom";
import {useContext, useEffect} from "react";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";

const HomePage = () => {
    const {store} = useContext(Context);

    useEffect(() => {
        if (localStorage.getItem("accessToken")){
           store.checkAuth();
        }

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
                <h1>{store.isAuth ? `Пользователь авторизован ${store.user.userName}` : 'Авторизуйтесь'}</h1>
                <Link to="/view_event" draggable={"false"}>

                </Link>

            </div>
            <Footer/>
        </div>
    );
}

export default observer(HomePage);
