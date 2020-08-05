import React from 'react'

export default (props) =>

    <div className="button">
        <button onClick={() => props.setNote(props.note) & props.setSelectedNote(props.note)}>
        {props.note}
        </button>
    </div>

