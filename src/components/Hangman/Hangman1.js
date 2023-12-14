import React, { useEffect, useState } from 'react';
import Progress from './Progress'
import Popup from './Popup'
import './Hangman1.css'

export default function Hangman1() {
    const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const animals =  [  "Equality",  "Diversity",  "Inclusion",  "Activism",  "Empathy",  "Justice",  "Compassion",  "Advocacy" , "Solidarity",  "Community",  "Renewable",  "Conservation",  "GreenEnergy",  "Recycling",  "Biodiversity",  "EcoFriendly",  "CarbonFootprint",  "Sustainability",  "OrganicFarming",  "ZeroWaste",  "Ecosystem",  "ClimateChange",  "Deforestation",  "OzoneLayer",  "Pollution",  "Conservation",  "Wilderness",  "Habitat",  "GlobalWarming",  "Wildlife"];
    
    const [corrects, setCorrects] = useState([])
    const [fails, setFails] = useState([])
    const [word,setWord] = useState('')
    const [status,setStatus] = useState('')
    const maskWord =
        word
            .split('')
            .map(letter => corrects.includes(letter) ? letter : "_")
            .join(" ")
    
    const onGuess = letter => {
        if (fails.length > 9 || status)
            return

        if (word.includes(letter)) {
            setCorrects([...corrects, letter])
        }
        else {
            setFails([...fails, letter])
        }
    }

    const randomizeWord = () => setWord(animals[Math.floor(Math.random() * animals.length)].toUpperCase())

    const reset = () => {
        randomizeWord()
        setCorrects([])
        setFails([])
        setStatus('')
    }

    useEffect(reset,[])

    useEffect(() => {
        if (corrects.length && word.split("").every(letter => corrects.includes(letter)))
            setStatus('win');
    },[corrects])

    useEffect(() => {
        if (fails.length === 10)
            setStatus('lose');
    },[fails])



    return (
        <div>
            <p className='mask'>{maskWord}</p>
            <div >
                {alphabets
                .map((letter, index) => 
                    <button 
                        className='bb'
                        key={index} 
                        disabled= {corrects.includes(letter) || fails.includes(letter)}
                        onClick={() => onGuess(letter)}>
                        {letter}
                    </button>
                )}
            </div>
            <div className='letters'>
            <Progress fails={fails.length}/>
            </div>
            <Popup status={status} word={word} reset={reset}/>

        </div>
    );
}