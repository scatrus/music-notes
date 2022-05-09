import React from "react";
import Notes from "../data/notes";
/* eslint-disable */

export default (props) => {
  const result = Notes.find((n1) => n1.note === props.Tonica);
  console.log(result);
  const N = result.id;
  const octave = 3;
  return (
    <>
      {props.chord === "M" ? (
        <>
          <div
            className="selected"
            onClick={() =>
              stop() &
              playKey(N, octave) &
              playKey(N + 4, octave) &
              playKey(N + 7, octave)
            }
          >
            <span>{props.note}</span>
          </div>
        </>
      ) : (
        <></>
      )}
      {props.chord === "m" ? (
        <>
          <div
            className="selected"
            onClick={() =>
              stop() &
              playKey(N, octave) &
              playKey(N + 3, octave) &
              playKey(N + 7, octave)
            }
          >
            <span> {props.note}</span>
          </div>
        </>
      ) : (
        <></>
      )}
      {props.chord === "7" ? (
        <>
          <div
            className="selected"
            onClick={() =>
              stop() &
              playKey(N, octave) &
              playKey(N + 4, octave) &
              playKey(N + 7, octave) &
              playKey(N + 10, octave)
            }
          >
            <span> {props.note}</span>
          </div>
        </>
      ) : (
        <></>
      )}
      {props.chord === "7M" ? (
        <>
          <div
            className="selected"
            onClick={() =>
              stop() &
              playKey(N, octave) &
              playKey(N + 4, octave) &
              playKey(N + 7, octave) &
              playKey(N + 11, octave)
            }
          >
            <span> {props.note}</span>
          </div>
        </>
      ) : (
        <></>
      )}
      {props.chord === "m7M" ? (
        <>
          <div
            className="selected"
            onClick={() =>
              stop() &
              playKey(N, octave) &
              playKey(N + 3, octave) &
              playKey(N + 7, octave) &
              playKey(N + 11, octave)
            }
          >
            <span> {props.note}</span>
          </div>
        </>
      ) : (
        <></>
      )}
      {props.chord === "m7" ? (
        <>
          <div
            className="selected"
            onClick={() =>
              stop() &
              playKey(N, octave) &
              playKey(N + 3, octave) &
              playKey(N + 7, octave) &
              playKey(N + 10, octave)
            }
          >
            <span> {props.note}</span>
          </div>
        </>
      ) : (
        <></>
      )}
      {props.chord === "9" ? (
        <>
          <div
            className="selected"
            onClick={() =>
              stop() &
              playKey(N, octave) &
              playKey(N + 4, octave) &
              playKey(N + 7, octave) &
              playKey(N + 14, octave)
            }
          >
            <span> {props.note}</span>
          </div>
        </>
      ) : (
        <></>
      )}
      {props.chord === "m9" ? (
        <>
          <div
            className="selected"
            onClick={() =>
              stop() &
              playKey(N, octave) &
              playKey(N + 3, octave) &
              playKey(N + 7, octave) &
              playKey(N + 14, octave)
            }
          >
            <span> {props.note}</span>
          </div>
        </>
      ) : (
        <></>
      )}
      {props.chord === "°" ? (
        <>
          <div
            className="selected"
            onClick={() =>
              stop() &
              playKey(N, octave) &
              playKey(N + 3, octave) &
              playKey(N + 6, octave) &
              playKey(N + 9, octave)
            }
          >
            <span> {props.note}</span>
          </div>
        </>
      ) : (
        <></>
      )}
      {props.Scale === "JÔNICO" ? (
        <>
          {/* <button onClick={()=>player.cancelQueue(audioContext)}>Stop</button> */}
          <div
            className="selected"
            onClick={() =>
              stop() &
              setTimeout(() => playKey(N, octave), 0) &
              setTimeout(() => playKey(N + 2, octave), 200) &
              setTimeout(() => playKey(N + 4, octave), 400) &
              setTimeout(() => playKey(N + 5, octave), 600) &
              setTimeout(() => playKey(N + 7, octave), 800) &
              setTimeout(() => playKey(N + 9, octave), 1000) &
              setTimeout(() => playKey(N + 11, octave), 1200) &
              setTimeout(() => playKey(N + 12, octave), 1400)
            }
          >
            <span> {props.note}</span>
          </div>
        </>
      ) : (
        <></>
      )}

      {props.Scale === "DÓRICO" ? (
        <>
          <div
            className="selected"
            onClick={() =>
              stop() &
              setTimeout(() => playKey(N, octave), 0) &
              setTimeout(() => playKey(N + 2, octave), 200) &
              setTimeout(() => playKey(N + 3, octave), 400) &
              setTimeout(() => playKey(N + 5, octave), 600) &
              setTimeout(() => playKey(N + 7, octave), 800) &
              setTimeout(() => playKey(N + 9, octave), 1000) &
              setTimeout(() => playKey(N + 10, octave), 1200) &
              setTimeout(() => playKey(N + 12, octave), 1400)
            }
          >
            <span> {props.note}</span>
          </div>
        </>
      ) : (
        <></>
      )}
      {props.Scale === "FRÍGIO" ? (
        <>
          <div
            className="selected"
            onClick={() =>
              stop() &
              setTimeout(() => playKey(N, octave), 0) &
              setTimeout(() => playKey(N + 1, octave), 500) &
              setTimeout(() => playKey(N + 3, octave), 1000) &
              setTimeout(() => playKey(N + 5, octave), 1500) &
              setTimeout(() => playKey(N + 7, octave), 2000) &
              setTimeout(() => playKey(N + 8, octave), 2500) &
              setTimeout(() => playKey(N + 10, octave), 3000) &
              setTimeout(() => playKey(N + 12, octave), 3500)
            }
          >
            <span> {props.note}</span>
          </div>
        </>
      ) : (
        <></>
      )}
      {props.Scale === "LÍDIO" ? (
        <>
          <div
            className="selected"
            onClick={() =>
              stop() &
              setTimeout(() => playKey(N), 0) &
              setTimeout(() => playKey(N + 2), 500) &
              setTimeout(() => playKey(N + 4), 1000) &
              setTimeout(() => playKey(N + 6), 1500) &
              setTimeout(() => playKey(N + 7), 2000) &
              setTimeout(() => playKey(N + 9), 2500) &
              setTimeout(() => playKey(N + 11), 3000) &
              setTimeout(() => playKey(N + 12), 3500) &
              setTimeout(() => playKey(N + 2), 4000) &
              setTimeout(() => playKey(N + 4), 4200) &
              setTimeout(() => playKey(N + 6), 4400) &
              setTimeout(() => playKey(N + 7), 4600) &
              setTimeout(() => playKey(N + 9), 4800) &
              setTimeout(() => playKey(N + 11), 5000) &
              setTimeout(() => playKey(N + 12), 5200)
            }
          >
            <span> {props.note}</span>
          </div>
        </>
      ) : (
        <></>
      )}
      {props.Scale === "MIXOLÍDIO" ? (
        <>
          <div
            className="selected"
            onClick={() =>
              stop() &
              setTimeout(() => playKey(N), 0) &
              setTimeout(() => playKey(N + 2), 500) &
              setTimeout(() => playKey(N + 4), 1000) &
              setTimeout(() => playKey(N + 5), 1500) &
              setTimeout(() => playKey(N + 7), 2000) &
              setTimeout(() => playKey(N + 9), 2500) &
              setTimeout(() => playKey(N + 10), 3000) &
              setTimeout(() => playKey(N + 12), 3500) &
              setTimeout(() => playKey(N + 2), 4000) &
              setTimeout(() => playKey(N + 4), 4200) &
              setTimeout(() => playKey(N + 5), 4400) &
              setTimeout(() => playKey(N + 7), 4600) &
              setTimeout(() => playKey(N + 9), 4800) &
              setTimeout(() => playKey(N + 10), 5000) &
              setTimeout(() => playKey(N + 12), 5200)
            }
          >
            <span> {props.note}</span>
          </div>
        </>
      ) : (
        <></>
      )}
      {props.Scale === "EÓLICO" ? (
        <>
          <div
            className="selected"
            onClick={() =>
              stop() &
              setTimeout(() => playKey(N), 0) &
              setTimeout(() => playKey(N + 2), 500) &
              setTimeout(() => playKey(N + 3), 1000) &
              setTimeout(() => playKey(N + 5), 1500) &
              setTimeout(() => playKey(N + 7), 2000) &
              setTimeout(() => playKey(N + 8), 2500) &
              setTimeout(() => playKey(N + 10), 3000) &
              setTimeout(() => playKey(N + 12), 3500) &
              setTimeout(() => playKey(N + 2), 4000) &
              setTimeout(() => playKey(N + 3), 4200) &
              setTimeout(() => playKey(N + 5), 4400) &
              setTimeout(() => playKey(N + 7), 4600) &
              setTimeout(() => playKey(N + 8), 4800) &
              setTimeout(() => playKey(N + 10), 5000) &
              setTimeout(() => playKey(N + 12), 5200)
            }
          >
            <span> {props.note}</span>
          </div>
        </>
      ) : (
        <></>
      )}
      {props.Scale === "LÓCRIO" ? (
        <>
          <div
            className="selected"
            onClick={() =>
              stop() &
              setTimeout(() => playKey(N), 0) &
              setTimeout(() => playKey(N + 1), 500) &
              setTimeout(() => playKey(N + 3), 1000) &
              setTimeout(() => playKey(N + 5), 1500) &
              setTimeout(() => playKey(N + 7), 2000) &
              setTimeout(() => playKey(N + 8), 2500) &
              setTimeout(() => playKey(N + 10), 3000) &
              setTimeout(() => playKey(N + 12), 3500) &
              setTimeout(() => playKey(N + 1), 4000) &
              setTimeout(() => playKey(N + 3), 4200) &
              setTimeout(() => playKey(N + 5), 4400) &
              setTimeout(() => playKey(N + 7), 4600) &
              setTimeout(() => playKey(N + 8), 4800) &
              setTimeout(() => playKey(N + 10), 5000) &
              setTimeout(() => playKey(N + 12), 5200)
            }
          >
            <span> {props.note}</span>
          </div>
        </>
      ) : (
        <></>
      )}
      {props.tuner === "E" ? (
        <>
          <div
            className="selected"
            onClick={() =>
              stop() &
              setTimeout(() => playKey(3 * 12 + 4), 0) &
              setTimeout(() => playKey(3 * 12 + 9), 100) &
              setTimeout(() => playKey(3 * 12 + 14), 200) &
              setTimeout(() => playKey(3 * 12 + 19), 300) &
              setTimeout(() => playKey(3 * 12 + 23), 400) &
              setTimeout(() => playKey(3 * 12 + 28), 500)
            }
          >
            <span>E</span>
          </div>
        </>
      ) : (
        <></>
      )}
      {props.tuner === "D" ? (
        <>
          <div
            className="selected"
            onClick={() =>
              stop() &
              setTimeout(() => playKey(3 * 12 + 2), 0) &
              setTimeout(() => playKey(3 * 12 + 9), 100) &
              setTimeout(() => playKey(3 * 12 + 14), 200) &
              setTimeout(() => playKey(3 * 12 + 18), 300) &
              setTimeout(() => playKey(3 * 12 + 21), 400) &
              setTimeout(() => playKey(3 * 12 + 26), 500)
            }
          >
            <span>D</span>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
