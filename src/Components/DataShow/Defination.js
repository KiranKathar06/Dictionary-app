import React from "react";

const Defination = ({ mean }) => {
  return (
    <div>
      {mean.map((val) =>
        val.meanings.map((means) =>
          means.definitions.map((def) => (
            <div key={def.definition}>
              <li>{def.definition}</li>
            </div>
          ))
        )
      )}
    </div>
  );
};

export default Defination;
