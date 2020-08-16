import React from 'react'

export default (props) =>

    <div className="tone">
        <button onClick={() => props.setNote(props.note) & props.setSelectedNote(props.note) & props.setChord("M") & props.setScale("JÔNICO")}>
        {props.note}
        </button>
    </div>

