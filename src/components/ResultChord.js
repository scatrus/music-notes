import React from 'react'
import Note from './Note'
import Notes from '../data/notes'

export default props => {


    /* eslint-disable */
    const result = Notes.find(n1 => n1.note === props.Tonica);

    const N = result.id
    const bT = <button onClick={() => playKey(4 * 12 + (N))}>{props.Tonica}</button>
    const b3M = <button onClick={() => playKey(4 * 12 + (N + 4))}>{Notes[N + 4].note}</button>

    const nb3m = Notes[N + 4].note + 'b'
    var r = nb3m.replace("#b", "")
    const b3m = <button onClick={() => playKey(4 * 12 + (N + 3))}>{r}</button>

    const b5J = <button onClick={() => playKey(4 * 12 + (N + 7))}>{Notes[N + 7].note}</button>
    const b7M = <button onClick={() => playKey(4 * 12 + (N + 11))}>{Notes[N + 11].note}</button>

    const b9 = <button onClick={() => playKey(4 * 12 + (N + 14))}>{Notes[N + 14].note}</button>


    const nb7m = Notes[N + 11].note + 'b'
    r = nb7m.replace("#b", "")
    const b7m = <button onClick={() => playKey(4 * 12 + (N + 10))}>{r}</button>

    return (
        <div className="result">

            {props.chord === "M" ? <>
            <div className="resultNotes">
                
                    <div><Note note={bT} /><h3>T</h3></div>
                    <span>2T</span>
                    <div><Note note={b3M} /><h3>3M</h3></div>
                    <span>3ST</span>
                    <div><Note note={b5J} /><h3>5J</h3></div>
                </div>
            </>
                : <></>
            }

            {props.chord === "m" ? <>
            <div className="resultNotes">

                    <div><Note note={bT} /><h3>T</h3></div>
                    <span>3ST</span>
                    <div><Note note={b3m} /><h3>3m</h3></div>
                    <span>2T</span>
                    <div><Note note={b5J} /><h3>5J</h3></div>
                </div>
            </>
                : <></>
            }

            {props.chord === "7" ? <>
            <div className="resultNotes">

                    <div><Note note={bT} /><h3>T</h3></div>
                    <span>2T</span>
                    <div><Note note={b3M} /><h3>3M</h3></div>
                    <span>3ST</span>
                    <div><Note note={b5J} /><h3>5J</h3></div>
                    <span>3ST</span>
                    <div><Note note={b7m} /><h3>7m</h3></div>
                </div>
            </>
                : <></>
            }

            {props.chord === "7M" ? <>
            <div className="resultNotes">

                    <div><Note note={bT} /><h3>T</h3></div>
                    <span>2T</span>
                    <div><Note note={b3M} /><h3>3M</h3></div>
                    <span>3ST</span>
                    <div><Note note={b5J} /><h3>5J</h3></div>
                    <span>3ST</span>
                    <div><Note note={b7M} /><h3>7M</h3></div>
                </div>
            </>
                : <></>
            }

            {props.chord === "m7M" ? <>

            <div className="resultNotes">

                    <div><Note note={bT} /><h3>T</h3></div>
                    <span>2T</span>
                    <div><Note note={b3m} /><h3>3m</h3></div>
                    <span>3ST</span>
                    <div><Note note={b5J} /><h3>5J</h3></div>
                    <span>3ST</span>
                    <div><Note note={b7M} /><h3>7M</h3></div>
                </div>
            </>
                : <></>
            }

            {props.chord === "m7" ? <>

            <div className="resultNotes">

                    <div><Note note={bT} /><h3>T</h3></div>
                    <span>2T</span>
                    <div><Note note={b3m} /><h3>3m</h3></div>
                    <span>3ST</span>
                    <div><Note note={b5J} /><h3>5J</h3></div>
                    <span>3ST</span>
                    <div><Note note={b7m} /><h3>7m</h3></div>
                </div>
            </>
                : <></>
            }

            {props.chord === "9" ? <>
            <div className="resultNotes">

                    <div><Note note={bT} /><h3>T</h3></div>
                    <span>2T</span>
                    <div><Note note={b3M} /><h3>3M</h3></div>
                    <span>3ST</span>
                    <div><Note note={b5J} /><h3>5J</h3></div>
                    <span>7ST</span>
                    <div><Note note={b9} /><h3>9</h3></div>
                </div>
            </>
                : <></>
            }

            {props.chord === "m9" ? <>
            <div className="resultNotes">

                    <div><Note note={bT} /><h3>T</h3></div>
                    <span>3ST</span>
                    <div><Note note={b3m} /><h3>3m</h3></div>
                    <span>2T</span>
                    <div><Note note={b5J} /><h3>5J</h3></div>
                    <span>7ST</span>
                    <div><Note note={b9} /><h3>9</h3></div>
                </div>
            </>
                : <></>
            }

        </div>)

}
