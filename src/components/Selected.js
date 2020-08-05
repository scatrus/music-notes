import React from 'react'

export default (props) =>
    <div className="selected" onClick={()=>alert(props.note)}>
        <span> {props.note}</span>
    </div>

