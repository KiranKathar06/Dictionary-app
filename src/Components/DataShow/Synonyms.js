import React from "react";

const Synonyms = ({ mean }) => {
  return (
    <div>
      <h3 className="text-2xl font-bold mt-4 block">Synonym:</h3>
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
