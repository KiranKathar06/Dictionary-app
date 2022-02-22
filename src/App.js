import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Header from "../src/Components/Header/Header";
import Definition from "./Components/Definition/Definition";

function App() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );

      setMeanings(data.data);

      console.log("data", data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dictionaryApi();
  }, [word]);

  return (
    <div className="App">
      <Header word={word} setWord={setWord} meanings={meanings} />
      {meanings && <Definition word={word} meanings={meanings} />}
    </div>
  );
}

export default App;
