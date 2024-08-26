import { useState, useEffect } from "react";

export default function Dictionary() {
  const [word, setWord] = useState();

  useEffect(() => {
    console.log("State updated", word);
  }); //Limit what state UseEffect cares about --> dependency array

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setWord(e.target.value);
        }}
      />

      <h1>Let's get the defination for {word}</h1>
    </>
  );
}
