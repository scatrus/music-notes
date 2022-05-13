import React from "react";

const scale = (props) => (
  <div className="scale">
    {[
      "JÔNICO",
      "DÓRICO",
      "FRÍGIO",
      "LÍDIO",
      "MIXOLÍDIO",
      "EÓLICO",
      "LÓCRIO",
    ].map((index, element) => (
      <button
        key={index}
        onClick={(e) =>
          props.setScale(e.target.value) &
          props.setSelectedNote(props.note + " " + e.target.value)
        }
        value={index}
      >
        {index}
      </button>
    ))}
  </div>
);

export default scale;
