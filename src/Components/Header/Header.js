import { FilledInput, TextField } from "@mui/material";
import React from "react";
import "./Header.css";

const Header = ({ word, setWord, meanings }) => {
  return (
    <div className="header">
      <h4 style={{ color: "#fff" }}>Dictionary</h4>
      <span className="title">{word ? word : "Word Hunt"}</span>
      <div className="inputs">
        <TextField
          className="search"
          value={word}
          onChange={(e) => {
            setWord(e.target.value);
          }}
          autoComplete="new-password"
          InputProps={{
            style: {
              color: "black",
              backgroundColor: "white",
              borderRadius: 50,
              autocomplete: "no",
              margin: "normal",
              padding: "normal",
              autoComplete: "new-password",
            },
          }}
          variant="outlined"
        />
      </div>

      <div>
        {meanings[0] && word && (
          <audio
            style={{ backgroundColor: "#fff", borderRadius: 10 }}
            src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
            controls
          >
            Your browser does not support the audio element.
          </audio>
        )}
      </div>
    </div>
  );
};

export default Header;
