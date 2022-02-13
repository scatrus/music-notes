import React from 'react'

export default (props) =>
    <div className="scale">
        {["JÔNICO", "DÓRICO", "FRÍGIO", "LÍDIO", "MIXOLÍDIO", "EÓLICO", "LÓCRIO"].map((element) => (
            <button
                onClick={(e) => props.setScale(e.target.value) & props.setSelectedNote(props.note + " " + e.target.value)}
                value={element}>{element}</button>
        ))
        }
    </div>