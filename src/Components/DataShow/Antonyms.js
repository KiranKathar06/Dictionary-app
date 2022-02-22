import React from "react";

const Antonyms = ({ mean }) => {
  return (
    <div>
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
