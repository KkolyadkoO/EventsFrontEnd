import Header from '../header/header';
import Footer from '../footer/footer';
import { getCategoriesOfEvents } from '../../api/api';
import { useState } from 'react';

const HomePage = () => {
  const [response, setResponse] = useState(null); // Ensure initial value is null

  const handelClick = async () => {
    try {
      const result = await getCategoriesOfEvents(); // Await the async call
      console.log(result); // Log the result for debugging
      setResponse(result); // Set the response to state
    } catch (error) {
      console.error("Error fetching categories:", error); // Handle errors
    }
  };

  return ( 
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <button onClick={handelClick}>Click</button>
        {response && <div>{response.map(item=>(<div>{item.title}</div>))}</div>} {}
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
