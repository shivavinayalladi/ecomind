import React,{useState} from 'react'
import Dashboard from '../dashboard/Dashboard'
import Navbar from  '../navbar/Navbar'
import Box from '@mui/material/Box';
import './Quote.css';
import axios from 'axios'

function Quote() {
  const [quote, setQuote] = useState('');

  const fetchRandomQuote = async () => {
    try {
      const quoteCategories = [
        "age", "alone", "amazing", "anger", "architecture", "art", "attitude", "beauty",
        "best", "birthday", "business", "car", "change", "communication", "computers",
        "cool", "courage", "dad", "dating", "death", "design", "dreams", "education",
        "environmental", "equality", "experience", "failure", "faith", "family", "famous",
        "fear", "fitness", "food", "forgiveness", "freedom", "friendship", "funny", "future",
        "god", "good", "government", "graduation", "great", "happiness", "health", "history",
        "home", "hope", "humor", "imagination", "inspirational", "intelligence", "jealousy",
        "knowledge", "leadership", "learning", "legal", "life", "love", "marriage", "medical",
        "men", "mom", "money", "morning", "movies", "success"
      ];
      
      // Function to get a random item from the array
      const getRandomCategory = () => {
        const randomIndex = Math.floor(Math.random() * quoteCategories.length);
        return quoteCategories[randomIndex];
      };
      
      // Example usage
      const randomCategory = getRandomCategory();
      const response = await axios.get('https://api.api-ninjas.com/v1/quotes', {
        params: { category: randomCategory },
        headers: { 'X-Api-Key': 'y7YbUwGXIe2Z7TOR0sYJug==iN2XEUr4RIZebhaK' }, // Replace with your API key
      });
      setQuote(response.data[0].quote);
    } catch (error) {
      console.error('Error: ', error.response.data);
    }
  };


  return (
    <div>
    <Navbar/>
    <Box height={45}/>
    <Box sx={{ display: 'flex' }}>
    <Dashboard/>
    <Box component="main" sx={{ flexGrow: 1,p:4}}>
        <div>
        <div className="qGnZr5Wb1">
      <h1 className="jHd9zPqFk">Quote Generator</h1>
      <button className="cYv2eGjX3" onClick={fetchRandomQuote}>
        Get Quote
      </button>
      {quote && <p className="rUoL7qTeS">{quote}</p>}
    </div>

        </div>
    </Box>
    </Box>


    </div>
  )
}

export default Quote