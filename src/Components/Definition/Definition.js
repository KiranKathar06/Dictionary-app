import { Link } from "@mui/material";
import React from "react";
import Antonyms from "../DataShow/Antonyms";
import Defination from "../DataShow/Defination";
import Example from "../DataShow/Example";
import Synonyms from "../DataShow/Synonyms";
import "./Definition.css";
const Definition = ({ word, meanings }) => {
  return (
    <div className="meanings">
      {word === "" ? (
        <span className="subTitle">Start by typing a word in search....</span>
      ) : (
        <div>
          <h3 className="text-2xl font-bold mt-4">Meaning & Definitions:</h3>
          <Defination mean={meanings} />
          <h3 className="text-2xl font-bold mt-4">Example:</h3>
          <Example mean={meanings} />
          <h3 className="text-2xl font-bold mt-4">Synonym:</h3>
          <Synonyms mean={meanings} />
          <h3 className="text-2xl font-bold mt-4">Antonym:</h3>
          <Antonyms mean={meanings} />
        </div>
      )}
    </div>
  );
};

export default Definition;
