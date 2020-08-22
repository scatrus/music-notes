import React from 'react'

export default (props) =>

    <div className="chord">

        <button onClick={(e) => props.setChord(e.target.value) & props.setSelectedNote(props.note)} value="M" >M</button>
        {["m", "7M", "7", "m7", "m7M", "9", "m9"].map((element) => (
        <button onClick={(e) => props.setChord(e.target.value) & props.setSelectedNote(props.note + e.target.value)} value={element}>{element}</button>
        ))}

    </div>


