import React from 'react'
import Notes from '../data/notes'
import Button from './Button';

export default props => {

    /* eslint-disable */
    const result = Notes.find(n1 => n1.note === props.Tonica);

    const N = result.id
    const bT = <Button N = {N} Note = {props.Tonica} />
    const b3M = <Button N = {N + 4} Note = {Notes[N + 4].note} />

    const nb3m = Notes[N + 4].note + 'b'
    var r = nb3m.replace("#b", "")
    const b3m = <Button N = {N + 3} Note = {r} />

    const b5J = <Button N = {N + 7} Note = {Notes[N + 7].note} />
    const b7M = <Button N = {N + 11} Note = {Notes[N + 11].note} />

    const b9 = <Button N = {N + 14} Note = {Notes[N + 14].note} />

    const nb7m = Notes[N + 11].note + 'b'
    r = nb7m.replace("#b", "")
    const b7m = <Button N = {N + 10} Note = {r} />

    return (
        <div className="result">

            {props.chord === "M" ? <>
                <div className="resultNotes">

                    <div>{bT}<h3>T</h3></div>
                    <div>{b3M}<h3>3M</h3></div>
                    <div>{b5J}<h3>5J</h3></div>
                </div>
            </>
                : <></>
            }

            {props.chord === "m" ? <>
                <div className="resultNotes">

                    <div> {bT} <h3>T</h3></div>

                    <div> {b3m} <h3>3m</h3></div>
                    <div> {b5J} <h3>5J</h3></div>
                </div>
            </>
                : <></>
            }

            {props.chord === "7" ? <>
                <div className="resultNotes">

                    <div> {bT} <h3>T</h3></div>
                    <div> {b3M} <h3>3M</h3></div>

                    <div> {b5J} <h3>5J</h3></div>

                    <div> {b7m} <h3>7m</h3></div>
                </div>
            </>
                : <></>
            }

            {props.chord === "7M" ? <>
                <div className="resultNotes">

                    <div> {bT} <h3>T</h3></div>
                    <div> {b3M} <h3>3M</h3></div>

                    <div> {b5J} <h3>5J</h3></div>

                    <div> {b7M} <h3>7M</h3></div>
                </div>
            </>
                : <></>
            }

            {props.chord === "m7M" ? <>

                <div className="resultNotes">

                    <div> {bT} <h3>T</h3></div>
                    <div> {b3m} <h3>3m</h3></div>

                    <div> {b5J} <h3>5J</h3></div>

                    <div> {b7M} <h3>7M</h3></div>
                </div>
            </>
                : <></>
            }

            {props.chord === "m7" ? <>

                <div className="resultNotes">

                    <div> {bT} <h3>T</h3></div>
                    <div> {b3m} <h3>3m</h3></div>

                    <div> {b5J} <h3>5J</h3></div>

                    <div> {b7m} <h3>7m</h3></div>
                </div>
            </>
                : <></>
            }

            {props.chord === "9" ? <>
                <div className="resultNotes">

                    <div> {bT} <h3>T</h3></div>
                    <div> {b3M} <h3>3M</h3></div>

                    <div> {b5J} <h3>5J</h3></div>

                    <div> {b9} <h3>9</h3></div>
                </div>
            </>
                : <></>
            }

            {props.chord === "m9" ? <>
                <div className="resultNotes">

                    <div> {bT} <h3>T</h3></div>

                    <div> {b3m} <h3>3m</h3></div>
                    <div> {b5J} <h3>5J</h3></div>

                    <div> {b9} <h3>9</h3></div>
                </div>
            </>
                : <></>
            }

        </div>)

}
