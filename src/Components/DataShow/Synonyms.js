import React from "react";

const Synonyms = ({ mean }) => {
  return (
    <div>
      {mean.map((val) =>
        val.meanings.map((means) =>
          means.definitions.map((def) => {
            return def.synonyms?.map((syn) => <li>{syn}</li>);
          })
        )
      )}
    </div>
  );
};

export default Synonyms;
