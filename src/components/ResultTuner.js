import React from "react";
import Button from "./Button";

export default (props) => {
  /* eslint-disable */
  const E1 = <Button N={props.note[4].id + 12} Note={props.note[4].note} />;
  const B2 = <Button N={props.note[11].id} Note={props.note[11].note} />;
  const G3 = <Button N={props.note[7].id} Note={props.note[7].note} />;
  const D4 = <Button N={props.note[2].id} Note={props.note[2].note} />;
  const A5 = <Button N={props.note[9].id - 12} Note={props.note[9].note} />;
  const E6 = <Button N={props.note[4].id - 12} Note={props.note[4].note} />;
  const D1 = <Button N={props.note[2].id + 12} Note={props.note[2].note} />;
  const A2 = <Button N={props.note[9].id} Note={props.note[9].note} />;
  const F3 = <Button N={props.note[6].id} Note={props.note[6].note} />;
  const D6 = <Button N={props.note[2].id - 12} Note={props.note[2].note} />;

  return (
    <div className="result">
      {props.tuner === "E" ? (
        <>
          <div className="resultNotes">
            <div>
              {E1}
              <h3>1ª</h3>
            </div>
            <div>
              {B2}
              <h3>2ª</h3>
            </div>
            <div>
              {G3}
              <h3>3ª</h3>
            </div>
            <div>
              {D4}
              <h3>4ª</h3>
            </div>
            <div>
              {A5}
              <h3>5ª</h3>
            </div>
            <div>
              {E6}
              <h3>6ª</h3>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

      {props.tuner === "D" ? (
        <>
          <div className="resultNotes">
            <div>
              {D1}
              <h3>1ª</h3>
            </div>
            <div>
              {A2}
              <h3>2ª</h3>
            </div>
            <div>
              {F3}
              <h3>3ª</h3>
            </div>
            <div>
              {D4}
              <h3>4ª</h3>
            </div>
            <div>
              {A5}
              <h3>5ª</h3>
            </div>
            <div>
              {D6}
              <h3>6ª</h3>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
