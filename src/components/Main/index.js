import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Segment,
  Item,
  Dropdown,
  Divider,
  Button,
  Message,
} from 'semantic-ui-react';
import './Main.css'
import mindImg from '../../images/mind.svg';


import {
  CATEGORIES,
  NUM_OF_QUESTIONS,
  DIFFICULTY,
  QUESTIONS_TYPE,
  COUNTDOWN_TIME,
} from '../../constants';
import { shuffle } from '../../utils';

import Offline from '../Offline';
import axios from 'axios';

const Main = ({ startQuiz }) => {
  const [category, setCategory] = useState('0');
  const [numOfQuestions, setNumOfQuestions] = useState(5);
  const [difficulty, setDifficulty] = useState('easy');
  const [questionsType, setQuestionsType] = useState('0');
  const [results,setresults]=useState([])
  const [countdownTime, setCountdownTime] = useState({
    hours: 0,
    minutes: 120,
    seconds: 0,
  });
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [offline, setOffline] = useState(false);

  const handleTimeChange = (e, { name, value }) => {
    setCountdownTime({ ...countdownTime, [name]: value });
  };

  let allFieldsSelected = false;
  if (
    
    numOfQuestions &&
   
    (countdownTime.hours || countdownTime.minutes || countdownTime.seconds)
  ) {
    allFieldsSelected = true;
  }

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  const generateRandomNumbers = (quantity, min, max) => {
    const randomNumbers = [];
  
    for (let i = 0; i < quantity; i++) {
      const randomNumber = getRandomNumber(min, max);
      randomNumbers.push(randomNumber);
    }
  
    return randomNumbers;
  };
  const fetchData = () => {
    const randomNumbers1 = generateRandomNumbers(5, 0, 38);
    const randomNumbers2 = generateRandomNumbers(5, 0, 28);
    const vari=[]


    setProcessing(true);
    axios.get("http://localhost:4000/AdminHome-api/get-quiz")
    .then((response)=>{
      console.log(response);
      setresults(response.data.payload)
   
      for(let i of randomNumbers1){
        let obj={};
        obj["question"]=response.data.payload1[i].question;
        obj["options"]=response.data.payload1[i].options;
         let originalLetter=response.data.payload1[i].answer;
        
         const convertedLetter = originalLetter.toLowerCase();
         const letterCode = convertedLetter.charCodeAt(0) - 'a'.charCodeAt(0);
         const ans =response.data.payload1[i].options[letterCode];
         obj["correct_answer"] = ans;
        let arr=response.data.payload1[i].options.filter((item=>(item!=ans)))
        obj["incorrect_answers"]=arr;
        obj["category"]=response.data.payload1[i].cateogery;
        vari.push(obj)
      }
      for(let i of randomNumbers2){
        let obj={};
        obj["question"]=response.data.payload2[i].question;
        obj["options"]=response.data.payload2[i].options;
        let originalLetter=response.data.payload2[i].answer;
        
         const convertedLetter = originalLetter.toLowerCase();
         const letterCode = convertedLetter.charCodeAt(0) - 'a'.charCodeAt(0);
         const ans =response.data.payload2[i].options[letterCode];
         obj["correct_answer"] = ans;
        let arr=response.data.payload2[i].options.filter((item=>(item!=ans)))
        obj["incorrect_answers"]=arr;
        obj["category"]=response.data.payload2[i].cateogery;
        vari.push(obj)
      }
      console.log(vari,"hjghg")
    })

    let results=vari;
         results.forEach(element => {
              element.options = shuffle([
                element.correct_answer,
                ...element.incorrect_answers,
                
              ]);
            });
            setProcessing(false);
                  startQuiz(
                    results,
                    countdownTime.hours + countdownTime.minutes + countdownTime.seconds
                  );
    // if (error) setError(null);

    // const API = `https://opentdb.com/api.php?amount=${numOfQuestions}&category=${category}&difficulty=${difficulty}&type=${questionsType}`;

    // fetch(API)
    //   .then(respone => respone.json())
    //   .then(data =>
    //     setTimeout(() => {
    //       const { response_code, results } = data;
    //       console.log(results)
    //       if (response_code === 1) {
    //         const message = (
    //           <p>
    //             The API doesn't have enough questions for your query. (Ex.
    //             Asking for 50 Questions in a Category that only has 20.)
    //             <br />
    //             <br />
    //             Please change the <strong>No. of Questions</strong>,{' '}
    //             <strong>Difficulty Level</strong>, or{' '}
    //             <strong>Type of Questions</strong>.
    //           </p>
    //         );

    //         setProcessing(false);
    //         setError({ message });

    //         return;
    //       }

    //       results.forEach(element => {
    //         element.options = shuffle([
    //           element.correct_answer,
    //           ...element.incorrect_answers,
    //         ]);
    //       });

    //       setProcessing(false);
    //       startQuiz(
    //         results,
    //         countdownTime.hours + countdownTime.minutes + countdownTime.seconds
    //       );
    //     }, 1000)
    //   )
    //   .catch(error =>
    //     setTimeout(() => {
    //       if (!navigator.onLine) {
    //         setOffline(true);
    //       } else {
    //         setProcessing(false);
    //         setError(error);
    //       }
    //     }, 1000)
    //   );

  };

  if (offline) return <Offline />;

  return (
    <div className='conatiner1'>
    <Container>
      <Segment>
        <Item.Group divided>
          <Item>
            <Item.Image src={mindImg} />
            <Item.Content>
              <Item.Header>
                <h1>The Echo Ultimate Quiz</h1>
              </Item.Header>
              {error && (
                <Message error onDismiss={() => setError(null)}>
                  <Message.Header>Error!</Message.Header>
                  {error.message}
                </Message>
              )}
              <Divider />
              <Item.Meta>
                {/* <p>In which category do you want to play the quiz?</p>
                <Dropdown
                  fluid
                  selection
                  name="category"
                  placeholder="Select Quiz Category"
                  header="Select Quiz Category"
                  options={CATEGORIES}
                  value={category}
                  onChange={(e, { value }) => setCategory(value)}
                  disabled={processing}
                /> */}
                <br />
                {/* <p>How many questions do you want in your quiz?</p> */}
                {/* <Dropdown
                  fluid
                  selection
                  name="numOfQ"
                  placeholder="Select No. of Questions"
                  header="Select No. of Questions"
                  options={NUM_OF_QUESTIONS}
                  value={numOfQuestions}
                  onChange={(e, { value }) => setNumOfQuestions(value)}
                  disabled={processing}
                /> */}
                <br />
                {/* <p>How difficult do you want your quiz to be?</p>
                <Dropdown
                  fluid
                  selection
                  name="difficulty"
                  placeholder="Select Difficulty Level"
                  header="Select Difficulty Level"
                  options={DIFFICULTY}
                  value={difficulty}
                  onChange={(e, { value }) => setDifficulty(value)}
                  disabled={processing}
                /> */}
                <br />
                {/* <p>Which type of questions do you want in your quiz?</p>
                <Dropdown
                  fluid
                  selection
                  name="type"
                  placeholder="Select Questions Type"
                  header="Select Questions Type"
                  options={QUESTIONS_TYPE}
                  value={questionsType}
                  onChange={(e, { value }) => setQuestionsType(value)}
                  disabled={processing}
                /> */}
                <br />
                <p>Please select the countdown time for your quiz.</p>
                <Dropdown
                  search
                  selection
                  name="hours"
                  placeholder="Select Hours"
                  header="Select Hours"
                  options={COUNTDOWN_TIME.hours}
                  value={countdownTime.hours}
                  onChange={handleTimeChange}
                  disabled={processing}
                />
                <Dropdown
                  search
                  selection
                  name="minutes"
                  placeholder="Select Minutes"
                  header="Select Minutes"
                  options={COUNTDOWN_TIME.minutes}
                  value={countdownTime.minutes}
                  onChange={handleTimeChange}
                  disabled={processing}
                />
                <Dropdown
                  search
                  selection
                  name="seconds"
                  placeholder="Select Seconds"
                  header="Select Seconds"
                  options={COUNTDOWN_TIME.seconds}
                  value={countdownTime.seconds}
                  onChange={handleTimeChange}
                  disabled={processing}
                />
              </Item.Meta>
              <Divider />
              <Item.Extra>
                <Button
                  primary
                  size="big"
                  icon="play"
                  labelPosition="left"
                  content={processing ? 'Processing...' : 'Play Now'}
                  onClick={fetchData}
                  disabled={!allFieldsSelected || processing}
                />
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <br />
    </Container>
    </div>
  );
};

Main.propTypes = {
  startQuiz: PropTypes.func.isRequired,
};

export default Main;
