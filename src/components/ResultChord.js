import React from "react";
import Notes from "../data/notes";
import Button from "./Button";

const resultChords = (props) => {
  /* eslint-disable */
  const result = Notes.find((n1) => n1.note === props.Tonica);
  const octave = 3;
  const N = result.id;

  const bT = <Button idNote={N} octave={octave} Note={props.Tonica} />;
  const b3M = (
    <Button idNote={N + 4} octave={octave} Note={Notes[N + 4].note} />
  );

  const nb3m = Notes[N + 4].note + "b";
  var r = nb3m.replace("#b", "");
  const b3m = <Button idNote={N + 3} octave={octave} Note={r} />;

  const nb5b = Notes[N + 7].note + "b";
  var r = nb5b.replace("#b", "");
  const b5b = <Button idNote={N + 6} octave={octave} Note={r} />;

  const b5J = (
    <Button idNote={N + 7} octave={octave} Note={Notes[N + 7].note} />
  );

  const nb5M = Notes[N + 7].note + "#";
  var r = nb5M.replace("##", "");
  const b5M = <Button idNote={N + 8} octave={octave} Note={r} />;

  const b7M = (
    <Button idNote={N + 11} octave={octave} Note={Notes[N + 11].note} />
  );

  const b9 = (
    <Button idNote={N + 2} octave={octave + 1} Note={Notes[N + 2].note} />
  );

  const nb7m = Notes[N + 11].note + "b";
  r = nb7m.replace("#b", "");
  const b7m = <Button idNote={N + 10} octave={octave} Note={r} />;

  const b7bb = (
    <Button idNote={N + 9} octave={octave} Note={Notes[N + 9].note} />
  );

  return (
    <div className="result">
      {props.chord === "M" ? (
        <>
          <div className="resultNotes">
            <div>
              {bT}
              <h3>T</h3>
            </div>
            <div>
              {b3M}
              <h3>3M</h3>
            </div>
            <div>
              {b5J}
              <h3>5J</h3>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

      {props.chord === "+" ? (
        <>
          <div className="resultNotes">
            <div>
              {bT}
              <h3>T</h3>
            </div>
            <div>
              {b3M}
              <h3>3M</h3>
            </div>
            <div>
              {b5M}
              <h3>5#</h3>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

      {props.chord === "m" ? (
        <>
          <div className="resultNotes">
            <div>
              {" "}
              {bT} <h3>T</h3>
            </div>

            <div>
              {" "}
              {b3m} <h3>3m</h3>
            </div>
            <div>
              {" "}
              {b5J} <h3>5J</h3>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

      {props.chord === "7" ? (
        <>
          <div className="resultNotes">
            <div>
              {" "}
              {bT} <h3>T</h3>
            </div>
            <div>
              {" "}
              {b3M} <h3>3M</h3>
            </div>

            <div>
              {" "}
              {b5J} <h3>5J</h3>
            </div>

            <div>
              {" "}
              {b7m} <h3>7m</h3>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

      {props.chord === "7M" ? (
        <>
          <div className="resultNotes">
            <div>
              {" "}
              {bT} <h3>T</h3>
            </div>
            <div>
              {" "}
              {b3M} <h3>3M</h3>
            </div>

            <div>
              {" "}
              {b5J} <h3>5J</h3>
            </div>

            <div>
              {" "}
              {b7M} <h3>7M</h3>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

      {props.chord === "m7M" ? (
        <>
          <div className="resultNotes">
            <div>
              {" "}
              {bT} <h3>T</h3>
            </div>
            <div>
              {" "}
              {b3m} <h3>3m</h3>
            </div>

            <div>
              {" "}
              {b5J} <h3>5J</h3>
            </div>

            <div>
              {" "}
              {b7M} <h3>7M</h3>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

      {props.chord === "m7" ? (
        <>
          <div className="resultNotes">
            <div>
              {" "}
              {bT} <h3>T</h3>
            </div>
            <div>
              {" "}
              {b3m} <h3>3m</h3>
            </div>

            <div>
              {" "}
              {b5J} <h3>5J</h3>
            </div>

            <div>
              {" "}
              {b7m} <h3>7m</h3>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

      {props.chord === "9" ? (
        <>
          <div className="resultNotes">
            <div>
              {" "}
              {bT} <h3>T</h3>
            </div>
            <div>
              {" "}
              {b3M} <h3>3M</h3>
            </div>

            <div>
              {" "}
              {b5J} <h3>5J</h3>
            </div>

            <div>
              {" "}
              {b9} <h3>9</h3>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

      {props.chord === "m9" ? (
        <>
          <div className="resultNotes">
            <div>
              {" "}
              {bT} <h3>T</h3>
            </div>

            <div>
              {" "}
              {b3m} <h3>3m</h3>
            </div>
            <div>
              {" "}
              {b5J} <h3>5J</h3>
            </div>

            <div>
              {" "}
              {b9} <h3>9</h3>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
      {props.chord === "°" ? (
        <>
          <div className="resultNotes">
            <div>
              {bT}
              <h3>T</h3>
            </div>
            <div>
              {b3m}
              <h3>3m</h3>
            </div>
            <div>
              {b5b}
              <h3>5b</h3>
            </div>
            <div>
              {b7bb}
              <h3>7bb</h3>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

      {props.chord === "m7(b5)" ? (
        <>
          <div className="resultNotes">
            <div>
              {bT}
              <h3>T</h3>
            </div>
            <div>
              {b3m}
              <h3>3m</h3>
            </div>
            <div>
              {b5b}
              <h3>5b</h3>
            </div>
            <div>
              {b7m}
              <h3>7m</h3>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default resultChords;
