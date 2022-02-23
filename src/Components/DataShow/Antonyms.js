import React from "react";

const Antonyms = ({ mean }) => {
  return (
    <div>
      <h3 className="text-2xl font-bold mt-4 block">Antonym:</h3>
      {mean.map((val) =>
        val.meanings.map((means) =>
          means.definitions.map((def) => {
            return def.antonyms?.map((ant) => <li>{ant}</li>);
          })
        )
      )}
    </div>
  );
};

export default Antonyms;
