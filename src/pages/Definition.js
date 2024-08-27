import { useState, useEffect } from "react";
import {useParams } from 'react-router-dom'
import {v4 as uuidv4} from 'uuid';


export default function Definition() {
  const [word, setWord] = useState([]); // Set initial state to an empty array

  let { search } = useParams();
  console.log(useParams());


  useEffect(() => {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + search)
      .then((response) => response.json())
      .then((data) => {
        setWord(data[0].meanings);
      });
  }, []);
  return (
    <>
      <h1>Here is a definition:</h1>
      {word ? word.map((meaning) => (
        <p key={uuidv4()}> {meaning.partOfSpeech}: 
        {' ' + meaning.definitions[0].definition}</p> // Add a key prop
      )) : null}
    </>
  );
}

