import { useState, useEffect } from "react";

export default function Dictionary() {
  const [word, setWord] = useState();
  const [word2, setWord2] = useState("");

  useEffect(() => {
    console.log("State updated" + word);
  }, [word]); //Limit what state UseEffect cares about --> dependency array
  useEffect(() => {
    console.log("State updated" + word2);
  }, [word2]); //Limit what state UseEffect cares about --> dependency array

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

      <h2>Let's get the defination for {word}</h2>
      <input
        type="text"
        onChange={(e) => {
          setWord2(e.target.value);
        }}
      />

      <h2>Let's get the defination for {word2}</h2>
    </>
  );
}
