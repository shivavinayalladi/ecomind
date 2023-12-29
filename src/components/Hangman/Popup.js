import axios from "axios";
import { useEffect, useState } from "react";

const Popup = ({status, word, reset}) => {
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
      useEffect(()=>{fetchRandomQuote()},[])
    if (!status)
        return null

    return <div className="popup">
        <h2><p>You <span>{status}!</span></p></h2>
        <h4><p>The word was {word}</p></h4>
        <p>Todays Quote is: <h6>{quote}</h6></p>
        <button className="pulse" onClick={reset}>
            Play again
        </button>
    </div>
}

export default Popup