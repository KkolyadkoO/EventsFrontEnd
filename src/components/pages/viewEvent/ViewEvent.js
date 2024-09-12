import Header from "../../header/Header";
import Footer from "../../footer";
import InformationOfEvent from "../../informationAboutEvent/InformationOfEvent";

const ViewEvent = () => {
    return (
        <div className='wrapper'>
            <Header />
            <div className='content'>
                <InformationOfEvent />
            </div>
            <Footer />
        </div>
    );
}

export default ViewEvent;