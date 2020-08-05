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

    </div>