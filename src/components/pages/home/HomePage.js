import Header from '../../header/Header';
import Footer from '../../footer';
import EventCard from "../../eventCard";
import "./HomePage.css"
import { getCategoriesOfEvents } from '../../../api/api';
import { useState } from 'react';
import { useEffect } from 'react';
import {Link} from "react-router-dom";
import LoginPage from "../login/LoginPage";

const HomePage = () => {
  const [response, setResponse] = useState(null); 

  const getCategories = async () => {
    try {
      const result = await getCategoriesOfEvents(); 
      console.log(result); 
      setResponse(result); 
    } catch (error) {
      console.error("Error fetching categories:", error); 
    }
  };

  useEffect(() =>{
    getCategories();
  },[]);
  return ( 
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <Link to="/view_event" draggable={"false"}>
          <EventCard />
        </Link>

      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
