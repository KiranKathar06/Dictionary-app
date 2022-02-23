import React from "react";

const Example = ({ mean }) => {
  return (
    <div>
      <h3 className="text-2xl font-bold mt-4 block">Example:</h3>
      {mean.map((val) =>
        val.meanings.map((means) =>
          means.definitions.map((def) => (
            <div key={def.example}>
              {def.example ? <li>{def.example}</li> : ""}
            </div>
          ))
        )
      )}
    </div>
  );
};

export default Example;
