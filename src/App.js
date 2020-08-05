import React, { useState } from 'react';
import './App.css'
import Button from './components/Button'
import Note from './data/notes'
import Selected from './components/Selected'
import Chord from './components/Chord';
import Scale from './components/Scale';
import ResultChord from './components/ResultChord';
import ResultScale from './components/ResultScale';

function App() {

  const [note, setNote] = useState('C')
  const [selectedNote, setSelectedNote] = useState('C')
  const [scale, setScale] = useState('JÔNICO')
  const [chord, setChord] = useState('M')
  const [option, setOption] = useState('ACORDES')

  var sub = Note.slice(0, 12)

  return (
    <div className="App">

      <header>
        <div className="option">
          <button value="escalas" onClick={() => setOption("ESCALAS")} >ESCALAS</button>
          <button value="acordes" onClick={() => setOption("ACORDES")} autoFocus>ACORDES</button>
        </div>
      </header>

      <div className="head">

        {sub.map((v) => (
          <Button key={v.note} note={v.note} setNote={setNote} setSelectedNote={setSelectedNote} />
        ))}

      </div>

      {option === "ESCALAS" ? <>
        <Scale setScale={setScale} />
        <Selected note={selectedNote} />
        <ResultScale Tonica={note} Scale={scale} /></>
        : <>
          <Chord setChord={setChord} setSelectedNote={setSelectedNote} note={note} />
          <Selected note={selectedNote} />
          <ResultChord Tonica={note} chord={chord} />
        </>
      }

    </div>

  );
}

export default App;
