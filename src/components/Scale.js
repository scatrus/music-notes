import React from 'react'

export default (props) =>

    <div className="scale">

        <button onClick={(e) => props.setScale(e.target.value)} value="JÔNICO">JÔNICO</button>
        <button onClick={(e) => props.setScale(e.target.value) & props.setSelectedNote(props.note + " " + e.target.value)} value="DÓRICO">DÓRICO</button>
        <button onClick={(e) => props.setScale(e.target.value) & props.setSelectedNote(props.note + " " + e.target.value)} value="FRÍGIO">FRÍGIO</button>
        <button onClick={(e) => props.setScale(e.target.value) & props.setSelectedNote(props.note + " " + e.target.value)} value="LÍDIO">LÍDIO</button>
        <button onClick={(e) => props.setScale(e.target.value) & props.setSelectedNote(props.note + " " + e.target.value)} value="MIXOLÍDIO">MIXOLÍDIO</button>
        <button onClick={(e) => props.setScale(e.target.value) & props.setSelectedNote(props.note + " " + e.target.value)} value="EÓLICO">EÓLICO</button>
        <button onClick={(e) => props.setScale(e.target.value) & props.setSelectedNote(props.note + " " + e.target.value)} value="LÓCRIO">LÓCRIO</button>

        {/* <select name="scale" id="scale" onChange={(e) => props.setScale(e.target.value)}>
            <option value="JÔNICO">JÔNICO</option>
            <option value="DÓRICO">DÓRICO</option>
            <option value="FRÍGIO">FRÍGIO</option>
            <option value="LÍDIO">LÍDIO</option>
            <option value="MIXOLÍDIO">MIXOLÍDIO</option>
            <option value="EÓLICO">EÓLICO</option>
            <option value="LÓCRIO">LÓCRIO</option>
        </select> */}
    </div>