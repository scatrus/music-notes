import React from 'react'

export default (props) =>

    <div className="chord">

        <select name="chord" id="chord" onChange={(e) => props.setChord(e.target.value)}>
            <option value="MAIOR">MAIOR</option>
            <option value="MENOR">MENOR</option>
            <option value="MAIOR COM SÉTIMA MENOR">MAIOR COM SÉTIMA MENOR</option>
            <option value="MAIOR COM SÉTIMA MAIOR">MAIOR COM SÉTIMA MAIOR</option>
        </select>
    </div>