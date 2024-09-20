import Header from '../../Header';
import Footer from '../../Footer';
import "./styles.css"
import {useContext} from "react";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";

const ProfilePage = () => {
    const {store} = useContext(Context);


    return (

        <div className='wrapper'>
            <Header/>
            <div className='content'>



            </div>
            <Footer/>
        </div>
    );
}

export default observer(ProfilePage);
