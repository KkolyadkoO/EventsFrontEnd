import Header from '../../header/header';
import Footer from '../../footer/footer';
import { getCategoriesOfEvents } from '../../../api/api';
import { useState } from 'react';
import { useEffect } from 'react';

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
        {/* <button onClick={handelClick}>Click</button> */}
        {response && <div>{response.map(item=>(<div>{item.title}</div>))}</div>} {}
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
