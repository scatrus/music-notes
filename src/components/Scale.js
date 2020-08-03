import React from 'react'

export default (props) =>

    <div className="scale">

        <select name="scale" id="scale" onChange={(e) => props.setScale(e.target.value)}>
            <option value="JÔNICO">JÔNICO</option>
            <option value="DÓRICO">DÓRICO</option>
            <option value="FRÍGIO">FRÍGIO</option>
            <option value="LÍDIO">LÍDIO</option>
            <option value="MIXOLÍDIO">MIXOLÍDIO</option>
            <option value="EÓLICO">EÓLICO</option>
            <option value="LÓCRIO">LÓCRIO</option>
        </select>
    </div>