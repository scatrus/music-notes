import React from 'react'
import Notes from '../data/notes'
import Button from './Button'

export default props => {

    /* eslint-disable */

    const result = Notes.find(n1 => n1.note === props.Tonica);
    const N = result.id

    const bT = <Button N={N} Note={props.Tonica}/>
    const b2 = <Button N={N + 1} Note={Notes[N + 1].note}/>
    const b3 = <Button N={N + 2} Note={Notes[N + 2].note}/>
    const b4 = <Button N={N + 3} Note={Notes[N + 3].note}/>
    const b5 = <Button N={N + 4} Note={Notes[N + 4].note}/>
    const b6 = <Button N={N + 5} Note={Notes[N + 5].note}/>
    const b7 = <Button N={N + 6} Note={Notes[N + 6].note}/>
    const b8 = <Button N={N + 7} Note={Notes[N + 7].note}/>
    const b9 = <Button N={N + 8} Note={Notes[N + 8].note}/>
    const b10 = <Button N={N + 9} Note={Notes[N + 9].note}/>
    const b11 = <Button N={N + 10} Note={Notes[N + 10].note}/>
    const b12 = <Button N={N + 11} Note={Notes[N + 11].note}/>
    const b13 = <Button N={N + 12} Note={Notes[N + 12].note}/>

    return (

        <div className="result">

            {props.Scale === "JÔNICO" ? <>

                    <div className="resultNotes">
                        <div>{bT} <h3>T</h3></div>
                        {[b3, b5, b6, b8, b10, b12, b13].map(
                            (element, index) => (
                                <div>{element} <h3>{index + 2}ª</h3></div>
                            ))}
                    </div>
                </>
                : <></>
            }

            {props.Scale === "DÓRICO" ? <>


                    <div className="resultNotes">

                        <div>{bT} <h3>T</h3></div>
                        <div>{b3} <h3>2ª</h3></div>
                        <div>{b4} <h3>3ª</h3></div>
                        <div>{b6} <h3>4ª</h3></div>
                        <div>{b8} <h3>5ª</h3></div>
                        <div>{b10} <h3>6ª</h3></div>
                        <div>{b11} <h3>7ª</h3></div>
                        <div>{b13} <h3>8ª</h3></div>

                    </div>
                </>
                : <></>
            }

            {props.Scale === "FRÍGIO" ? <>

                    <div className="resultNotes">

                        <div>{bT} <h3>T</h3></div>
                        <div>{b2} <h3>2ª</h3></div>
                        <div>{b4} <h3>3ª</h3></div>
                        <div>{b6} <h3>4ª</h3></div>
                        <div>{b8} <h3>5ª</h3></div>
                        <div>{b9} <h3>6ª</h3></div>
                        <div>{b11} <h3>7ª</h3></div>
                        <div>{b13} <h3>8ª</h3></div>

                    </div>
                </>
                : <></>
            }

            {props.Scale === "LÍDIO" ? <>

                    <div className="resultNotes">

                        <div>{bT} <h3>T</h3></div>
                        <div>{b3} <h3>2ª</h3></div>
                        <div>{b5} <h3>3ª</h3></div>
                        <div>{b7} <h3>4ª</h3></div>
                        <div>{b8} <h3>5ª</h3></div>
                        <div>{b10} <h3>6ª</h3></div>
                        <div>{b12} <h3>7ª</h3></div>
                        <div>{b13} <h3>8ª</h3></div>

                    </div>
                </>
                : <></>
            }

            {props.Scale === "MIXOLÍDIO" ? <>

                    <div className="resultNotes">

                        <div>{bT} <h3>T</h3></div>
                        <div>{b3} <h3>2ª</h3></div>
                        <div>{b5} <h3>3ª</h3></div>
                        <div>{b6} <h3>4ª</h3></div>
                        <div>{b8} <h3>5ª</h3></div>
                        <div>{b10} <h3>6ª</h3></div>
                        <div>{b11} <h3>7ª</h3></div>
                        <div>{b13} <h3>8ª</h3></div>

                    </div>
                </>
                : <></>
            }

            {props.Scale === "EÓLICO" ? <>

                    <div className="resultNotes">

                        <div>{bT} <h3>T</h3></div>
                        <div>{b3} <h3>2ª</h3></div>
                        <div>{b4} <h3>3ª</h3></div>
                        <div>{b6} <h3>4ª</h3></div>
                        <div>{b8} <h3>5ª</h3></div>
                        <div>{b9} <h3>6ª</h3></div>
                        <div>{b11} <h3>7ª</h3></div>
                        <div>{b13} <h3>8ª</h3></div>

                    </div>
                </>
                : <></>
            }

            {props.Scale === "LÓCRIO" ? <>

                    <div className="resultNotes">

                        <div>{bT} <h3>T</h3></div>
                        <div>{b2} <h3>2ª</h3></div>
                        <div>{b4} <h3>3ª</h3></div>
                        <div>{b6} <h3>4ª</h3></div>
                        <div>{b7} <h3>5ª</h3></div>
                        <div>{b9} <h3>6ª</h3></div>
                        <div>{b11} <h3>7ª</h3></div>
                        <div>{b13} <h3>8ª</h3></div>

                    </div>
                </>
                : <></>
            }

        </div>

    )

}
