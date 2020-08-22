import React, { useState } from 'react';
import './App.css'
import Tone from './components/Tone'
import Note from './data/notes'
import Selected from './components/Selected'
import Chord from './components/Chord';
import Tuner from './components/Tuner'
import Scale from './components/Scale';
import ResultChord from './components/ResultChord';
import ResultScale from './components/ResultScale';
import ResultTuner from './components/ResultTuner';
import Voice from './components/Voice';

function App() {

  const [note, setNote] = useState('C')
  const [selectedNote, setSelectedNote] = useState('')
  const [scale, setScale] = useState('JÔNICO')
  const [chord, setChord] = useState('M')
  const [tuner, setTuner] = useState('')
  const [option, setOption] = useState('')


  var sub = Note.slice(0, 12)

  return (
    <div className="App">

      <header>
        <div className="option">
          
          <button className="tuner" value="tuner" onClick={() => setOption("AFINADOR")} autoFocus>AFINADOR</button>
          <button className="scale" value="escalas" onClick={() => setOption("ESCALAS") & setNote("C") & setScale("JÔNICO") & setSelectedNote("C JÔNICO")} >ESCALAS</button>
          <button className="scale" value="vozes" onClick={() => setOption("VOZES") & setNote("C") & setScale("JÔNICO") & setSelectedNote("C")} >VOZES</button>
          <button className="chord" value="acordes" onClick={() => setOption("ACORDES") & setNote("C") & setChord("M") & setSelectedNote("C")} >ACORDES</button>
        </div>
      </header>
      <hr />



      {option === "ESCALAS" ? <>

        <div className="tones">

          {sub.map((v) => (
            <Tone key={v.note} note={v.note} setNote={setNote} setSelectedNote={setSelectedNote} setScale={setScale} setChord={setChord} />
          ))}

        </div>
        <hr />


        <Scale setScale={setScale} setSelectedNote={setSelectedNote} note={note} />

        <hr />
        <Selected note={selectedNote} Tonica={note} Scale={scale} />
        <ResultScale Tonica={note} Scale={scale} /></> : <></>
      }

      {option === "ACORDES" ? <>

        <div className="tones">

          {sub.map((v) => (
            <Tone key={v.note} note={v.note} setNote={setNote} setSelectedNote={setSelectedNote} setChord={setChord} setScale={setScale} />
          ))}


        </div>
        <hr />

        <Chord setChord={setChord} setSelectedNote={setSelectedNote} note={note} />
        <hr />
        <Selected Tonica={note} note={selectedNote} chord={chord} />
        <ResultChord Tonica={note} chord={chord} /></> : <></>
      }

      {option === "AFINADOR" ? <>
        <Tuner setTuner={setTuner} />
        <hr />
        <Selected Tonica={note} note={selectedNote} tuner={tuner} />
        <ResultTuner Tonica={note} tuner={tuner} /></> : <></>
      }

      {option === "VOZES" ? <>

        <div className="tones">

          {sub.map((v) => (
            <Tone key={v.note} note={v.note} setNote={setNote} setSelectedNote={setSelectedNote} setScale={setScale} setChord={setChord} />
          ))}

        </div>
        <hr />

        <hr />
        <Selected note={selectedNote} Tonica={note} Scale={scale} />
        <Voice Tonica={note} Scale={scale} /></> : <></>
      }

    </div>

  );
}

export default App;
