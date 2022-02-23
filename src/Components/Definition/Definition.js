import { Link } from "@mui/material";
import React from "react";
import Antonyms from "../DataShow/Antonyms";
import Defination from "../DataShow/Defination";
import Example from "../DataShow/Example";
import Synonyms from "../DataShow/Synonyms";
import Word from "../DataShow/Word";
import "./Definition.css";
const Definition = ({ word, meanings }) => {
  return (
    <div className="meanings">
      {word === "" ? (
        <span className="subTitle">
          <Word />
        </span>
      ) : (
        <div>
          <Defination mean={meanings} />
          <hr />

          <Example mean={meanings} />
          <hr />

          <Synonyms mean={meanings} />
          <hr />

          <Antonyms mean={meanings} />
        </div>
      )}
    </div>
  );
};

export default Definition;
