import React, { useState } from 'react';
import axios from 'axios';
import './Riddle.css';


const Riddle = () => {
  const [data,setdata] = useState(null)
  const [correctAnswer,setAnswer] = useState(null)
  const fetchData = async () => {
        try {
          const response = await axios.get('https://api.api-ninjas.com/v1/riddles', {
            headers: {
              'X-Api-Key': 'y7YbUwGXIe2Z7TOR0sYJug==iN2XEUr4RIZebhaK',
              'Content-Type': 'application/json',
            },
          });
    
          console.log(response.data);
          setdata(response.data)
          setAnswer(response.data[0].answer)
        } catch (error) {
          console.error('Error:', error.response ? error.response.data : error.message);
        }
      };
  const [userAnswer, setUserAnswer] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  // const correctAnswer = 'your_static_answer_here'; // Replace with your static answer

  const handleInputChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const handleCheckAnswer = () => {
    setShowAnswer(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Riddle Time!</h1>
        
        <p>Can you solve this riddle?</p>
        <p>{/* Replace with your static riddle */}</p>
        {data && 
        <p>{data[0].title}</p>
        } 
        {data && 
        <p>{data[0].question}</p>
        } 
        <input
          type="text"
          value={userAnswer}
          onChange={handleInputChange}
          placeholder="Enter your answer"
        />

        <button onClick={handleCheckAnswer}>Check Answer</button>
        <button onClick={fetchData}>GET Riddle</button>

        {showAnswer && (
          <div className="answer">
            <p>
              The correct answer is: <strong>{correctAnswer}</strong>
            </p>
          </div>
        )}
      </header>
    </div>
  );
};

export default Riddle;