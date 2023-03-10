import React from 'react'

const tone =  (props) =>(

    <div className="tone">
        <button
            onClick={() => props.setNote(props.note) & props.setSelectedNote(props.note) & props.setChord("M") & props.setScale("JÔNICO")}>
            {props.note}
        </button>
    </div>);
export default tone;

