import React from "react";

const Defination = ({ mean }) => {
  return (
    <div
      style={{ boxShadow: "box-shadow: 3px 4px 5px 6px rgba(20,20,20,0.4);" }}
    >
      <h3 className="text-2xl font-bold mt-4 block">Meaning & Definitions:</h3>
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
