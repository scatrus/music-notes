import React from 'react'

const tuner =  (props) =>(

    <div className="tuner">
        <button onClick={(e) => props.setTuner(e.target.value)} value="E">Violão - E</button>
        <button onClick={(e) => props.setTuner(e.target.value)} value="D">Violão - D</button>
    </div>);
export default tuner;

    