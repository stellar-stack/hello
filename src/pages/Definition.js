import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import NotFound from "../components/NotFound";
import DefinitionSearch from "../components/DefinitionSearch";

export default function Definition() {
  const [word, setWord] = useState();
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(false);

  let { search } = useParams();

  const navigate = useNavigate();
  console.log(useParams());

  useEffect(() => {
    //const url = 'http://httpstat.us/401';
    const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + search;
    fetch(url + search)
      .then((response) => {
        console.log(response.status);
        
        if (response.status === 404) {
          setNotFound(true);
        } else if (response.status === 401) {
          navigate("/login");
        } else if (response.status === 500) {
          //setServerError(true)
        }
        if (!response.ok) {
          setError(true);

          throw new Error("Something went wrong");
        }
        return response.json();
      })
      .then((data) => {
        setWord(data[0].meanings);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  if (notFound === true) {
    return (
      <>
        {<NotFound />}
        <Link to="/dictionary">Search Another</Link>
      </>
    );
  }

  if (error === true) {
    return (
      <>
        <p>Something Went wrong</p>
        <Link to="/dictionary">Search Another</Link>
      </>
    );
  }
  return (
    <>
      {word ? (
        <>
          <h1>Here is a definition:</h1>
          {word.map((meaning) => (
            <p key={uuidv4()}>
              {" "}
              {meaning.partOfSpeech}:{" " + meaning.definitions[0].definition}
            </p> // Add a key prop
          ))}
          
          <p>Search Again</p>
          <DefinitionSearch />
          
          {" "}
        </>
      ) : null}
    </>
  );
}
