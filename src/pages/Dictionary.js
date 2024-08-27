import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';


export default function Dictionary() {

  const [word, setWord] = useState();
  const navigate = useNavigate();


  //no dependency array --> update for any state change
  //empty dependency array --> execute once
  //passing in data --> execute when those stae variables are changed
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setWord(e.target.value);
        }}
      />

      <button 
      onClick={() => {
        navigate('/definition/' + word);
      }}>Search</button>
    </>
  );
}
