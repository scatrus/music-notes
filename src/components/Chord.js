import React from 'react'

export default (props) =>

    <div className="chord">

        <button onClick={(e) => props.setChord(e.target.value) & props.setSelectedNote(props.note)}  value="M" >M</button>
        <button onClick={(e) => props.setChord(e.target.value) & props.setSelectedNote(props.note + e.target.value)}  value="m">m</button>
        <button onClick={(e) => props.setChord(e.target.value) & props.setSelectedNote(props.note + e.target.value)}  value="7M">M7M</button>
        <button onClick={(e) => props.setChord(e.target.value) & props.setSelectedNote(props.note + e.target.value)}  value="7">M7</button>
        <button onClick={(e) => props.setChord(e.target.value) & props.setSelectedNote(props.note + e.target.value)}  value="m7">m7</button>
        <button onClick={(e) => props.setChord(e.target.value) & props.setSelectedNote(props.note + e.target.value)}  value="m7M">m7M</button>
        <button onClick={(e) => props.setChord(e.target.value) & props.setSelectedNote(props.note + e.target.value)}  value="9">M9</button>
        <button onClick={(e) => props.setChord(e.target.value) & props.setSelectedNote(props.note + e.target.value)}  value="m9">m9</button>



        {/* <select name="chord" id="chord" onChange={(e) => props.setChord(e.target.value)}>
            <option value="MAIOR">MAIOR</option>
            <option value="MENOR">MENOR</option>
            <option value="MAIOR COM SÉTIMA MENOR">MAIOR COM SÉTIMA MENOR</option>
            <option value="MAIOR COM SÉTIMA MAIOR">MAIOR COM SÉTIMA MAIOR</option>
            <option value="MENOR COM SÉTIMA MAIOR">MENOR COM SÉTIMA MAIOR</option>
            <option value="MENOR COM SÉTIMA MENOR">MENOR COM SÉTIMA MENOR</option>
            <option value="MAIOR COM NONA">MAIOR COM NONA</option>
            <option value="MENOR COM NONA">MENOR COM NONA</option>
        </select> */}

    </div>