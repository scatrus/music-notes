import React from "react";

const chord = (props) => (
  <div className="chord">
    <button
      onClick={(e) =>
        props.setChord(e.target.value) & props.setSelectedNote(props.note)
      }
      value="M"
    >
      M
    </button>
    {["+", "m", "7M", "7", "m7", "m7M", "9", "m9", "°", "m7(b5)"].map(
      (element, index) => (
        <button
          key={index}
          onClick={(e) =>
            props.setChord(e.target.value) &
            props.setSelectedNote(props.note + e.target.value)
          }
          value={element}
        >
          {element}
        </button>
      )
    )}
  </div>
);
export default chord;
