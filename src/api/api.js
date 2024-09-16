import axios from 'axios';

export const getCategoriesOfEvents = async () => {
  try {
    const response = await axios.get('http://localhost:5163/CategoryOfEvents');
    console.log(response.data);
    return response.data; 
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error; 
  }
};
