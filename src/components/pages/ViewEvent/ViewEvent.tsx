import Header from "../../Header";
import Footer from "../../Footer";
import InformationOfEvent from "../../InformationAboutEvent";

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