import React, { useState } from "react";
import "./App.css";
import Tone from "./components/Tone";
import Note from "./data/notes";
import Selected from "./components/Selected";
import Chord from "./components/Chord";
import Tuner from "./components/Tuner";
import Scale from "./components/Scale";
import ResultChord from "./components/ResultChord";
import ResultScale from "./components/ResultScale";
import ResultTuner from "./components/ResultTuner";
// import OnlineTuner from "./components/OnlineTuner";

function App() {
  const [note, setNote] = useState("C");
  const [selectedNote, setSelectedNote] = useState("");
  const [scale, setScale] = useState("JÔNICO");
  const [chord, setChord] = useState("M");
  const [tuner, setTuner] = useState("E");
  const [option, setOption] = useState("");
  // const [MIDI, setMIDI] = useState("");

  var sub = Note.slice(0, 12);

  return (
    <div className="App">
      <header>
        {/* <div>
          <select
            defaultValue="_tone_0250_Acoustic_Guitar_sf2_file"
            name="MIDI"
            id="setMIDI"
            onChange={(e) => setMIDI(e.target.value) + console.log(MIDI)}
          >
            <option value="_tone_0250_Acoustic_Guitar_sf2_file">Violão</option>
            <option value="_tone_0010_SBLive_sf2_file">Piano</option>
          </select>
        </div> */}
        <div className="option">
          <button
            className="tuner"
            value="tuner"
            onClick={() => setOption("AFINADOR")}
            autoFocus
          >
            AFINADOR
          </button>
          <button
            className="scale"
            value="escalas"
            onClick={() =>
              setOption("ESCALAS") &
              setNote("C") &
              setScale("JÔNICO") &
              setSelectedNote("C JÔNICO")
            }
          >
            ESCALAS
          </button>
          <button
            className="chord"
            value="acordes"
            onClick={() =>
              setOption("ACORDES") &
              setNote("C") &
              setChord("M") &
              setSelectedNote("C")
            }
          >
            ACORDES
          </button>
        </div>
      </header>
      <hr />

      {option === "ESCALAS" ? (
        <>
          <div className="tones">
            {sub.map((v) => (
              <Tone
                key={v.note}
                note={v.note}
                setNote={setNote}
                setSelectedNote={setSelectedNote}
                setScale={setScale}
                setChord={setChord}
              />
            ))}
          </div>
          <hr />

          <Scale
            key={note}
            setScale={setScale}
            setSelectedNote={setSelectedNote}
            note={note}
          />

          <hr />
          <Selected note={selectedNote} Tonica={note} Scale={scale} />
          <ResultScale Tonica={note} Scale={scale} />
        </>
      ) : (
        <></>
      )}

      {option === "ACORDES" ? (
        <>
          <div className="tones">
            {sub.map((v) => (
              <Tone
                key={v.note}
                note={v.note}
                setNote={setNote}
                setSelectedNote={setSelectedNote}
                setChord={setChord}
                setScale={setScale}
              />
            ))}
          </div>
          <hr />

          <Chord
            setChord={setChord}
            setSelectedNote={setSelectedNote}
            note={note}
          />
          <hr />
          <Selected Tonica={note} note={selectedNote} chord={chord} />
          <ResultChord Tonica={note} chord={chord} />
        </>
      ) : (
        <></>
      )}

      {option === "AFINADOR" ? (
        <>
          <Tuner setTuner={setTuner} />
          <hr />
          <Selected Tonica={note} note={selectedNote} tuner={tuner} />
          <ResultTuner tuner={tuner} note={sub} />
          <hr />
          {/*<OnlineTuner />*/}
        </>
      ) : (
        <></>
      )}
      <hr />
      <br />
      <center>
        <footer>Version 2.0</footer>
      </center>
    </div>
  );
}

export default App;
