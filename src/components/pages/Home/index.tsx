import Header from '../../Header';
import Footer from '../../Footer';
import EventCard from "../../EventCard";
import "./styles.css"
import { getCategoriesOfEvents } from '../../../api/api';
import { useState } from 'react';
import { useEffect } from 'react';
import {Link} from "react-router-dom";
import LoginPage from "../Login";

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

        </Link>

      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
