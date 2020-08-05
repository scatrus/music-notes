import React from 'react'
import Note from './Note'
import Notes from '../data/notes'
import { FiPlayCircle } from 'react-icons/fi'

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

    const b9 = <button onClick={() => playKey(4 * 12 + (N + 2))}>{Notes[N + 2].note}</button>


    const nb7m = Notes[N + 11].note + 'b'
    r = nb7m.replace("#b", "")
    const b7m = <button onClick={() => playKey(4 * 12 + (N + 10))}>{r}</button>

    return (
        <div className="result">

            {props.chord === "M" ? <>
            <div className="resultNotes">
                
                    <div className="sound" onClick={() =>
                        playKey(4 * 12 + (N)) &
                        playKey(4 * 12 + (N + 4)) &
                        playKey(4 * 12 + (N + 7))}>
                        <FiPlayCircle size={'2vw'} /></div>

                    <div className="sound" onClick={() => setTimeout(() =>
                        playKey(4 * 12 + (N)), 0) &
                        setTimeout(() => playKey(4 * 12 + (N + 4)), 500) &
                        setTimeout(() => playKey(4 * 12 + (N + 7)), 1000)}>
                        <FiPlayCircle size={'2vw'} /></div>
               

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

                    <div className="sound" onClick={() =>
                        playKey(4 * 12 + (N)) &
                        playKey(4 * 12 + (N + 3)) &
                        playKey(4 * 12 + (N + 7))}>
                        <FiPlayCircle size={'2vw'} /></div>

                    <div className="sound" onClick={() => setTimeout(() =>
                        playKey(4 * 12 + (N)), 0) &
                        setTimeout(() => playKey(4 * 12 + (N + 3)), 500) &
                        setTimeout(() => playKey(4 * 12 + (N + 7)), 1000)}>
                        <FiPlayCircle size={'2vw'} /></div>
                

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

                    <div className="sound" onClick={() =>
                        playKey(4 * 12 + (N)) &
                        playKey(4 * 12 + (N + 4)) &
                        playKey(4 * 12 + (N + 7)) &
                        playKey(4 * 12 + (N + 10))}>
                        <FiPlayCircle size={'2vw'} /></div>

                    <div className="sound" onClick={() => setTimeout(() =>
                        playKey(4 * 12 + (N)), 0) &
                        setTimeout(() => playKey(4 * 12 + (N + 4)), 500) &
                        setTimeout(() => playKey(4 * 12 + (N + 7)), 1000) &
                        setTimeout(() => playKey(4 * 12 + (N + 10)), 1500)}>
                        <FiPlayCircle size={'2vw'} /></div>
                

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

                    <div className="sound" onClick={() =>
                        playKey(4 * 12 + (N)) &
                        playKey(4 * 12 + (N + 4)) &
                        playKey(4 * 12 + (N + 7)) &
                        playKey(4 * 12 + (N + 11))}>
                        <FiPlayCircle size={'2vw'} /></div>

                    <div className="sound" onClick={() => setTimeout(() =>
                        playKey(4 * 12 + (N)), 0) &
                        setTimeout(() => playKey(4 * 12 + (N + 4)), 500) &
                        setTimeout(() => playKey(4 * 12 + (N + 7)), 1000) &
                        setTimeout(() => playKey(4 * 12 + (N + 11)), 1500)}>
                        <FiPlayCircle size={'2vw'} /></div>
                

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


                    <div className="sound" onClick={() =>
                        playKey(4 * 12 + (N)) &
                        playKey(4 * 12 + (N + 3)) &
                        playKey(4 * 12 + (N + 7)) &
                        playKey(4 * 12 + (N + 11))}>
                        <FiPlayCircle size={'2vw'} /></div>

                    <div className="sound" onClick={() => setTimeout(() =>
                        playKey(4 * 12 + (N)), 0) &
                        setTimeout(() => playKey(4 * 12 + (N + 3)), 500) &
                        setTimeout(() => playKey(4 * 12 + (N + 7)), 1000) &
                        setTimeout(() => playKey(4 * 12 + (N + 11)), 1500)}>
                        <FiPlayCircle size={'2vw'} /></div>
                

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


                    <div className="sound" onClick={() =>
                        playKey(4 * 12 + (N)) &
                        playKey(4 * 12 + (N + 3)) &
                        playKey(4 * 12 + (N + 7)) &
                        playKey(4 * 12 + (N + 10))}>
                        <FiPlayCircle size={'2vw'} /></div>

                    <div className="sound" onClick={() => setTimeout(() =>
                        playKey(4 * 12 + (N)), 0) &
                        setTimeout(() => playKey(4 * 12 + (N + 3)), 500) &
                        setTimeout(() => playKey(4 * 12 + (N + 7)), 1000) &
                        setTimeout(() => playKey(4 * 12 + (N + 10)), 1500)}>
                        <FiPlayCircle size={'2vw'} /></div>
               

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

                    <div className="sound" onClick={() =>
                        playKey(4 * 12 + (N)) &
                        playKey(4 * 12 + (N + 2)) &
                        playKey(4 * 12 + (N + 4)) &
                        playKey(4 * 12 + (N + 7))}>
                        <FiPlayCircle size={'2vw'} /></div>

                    <div className="sound" onClick={() => setTimeout(() =>
                        playKey(4 * 12 + (N)), 0) &
                        setTimeout(() => playKey(4 * 12 + (N + 2)), 500) &
                        setTimeout(() => playKey(4 * 12 + (N + 4)), 1000) &
                        setTimeout(() => playKey(4 * 12 + (N + 7)), 1500)}>
                        <FiPlayCircle size={'2vw'} /></div>
                

                    <div><Note note={bT} /><h3>T</h3></div>
                    <span>T</span>
                    <div><Note note={b9} /><h3>9</h3></div>
                    <span>T</span>
                    <div><Note note={b3M} /><h3>3M</h3></div>
                    <span>3ST</span>
                    <div><Note note={b5J} /><h3>5J</h3></div>
                </div>
            </>
                : <></>
            }

            {props.chord === "m9" ? <>
            <div className="resultNotes">

                    <div className="sound" onClick={() =>
                        playKey(4 * 12 + (N)) &
                        playKey(4 * 12 + (N + 2)) &
                        playKey(4 * 12 + (N + 3)) &
                        playKey(4 * 12 + (N + 7))}>
                        <FiPlayCircle size={'2vw'} /></div>

                    <div className="sound" onClick={() => setTimeout(() =>
                        playKey(4 * 12 + (N)), 0) &
                        setTimeout(() => playKey(4 * 12 + (N + 2)), 500) &
                        setTimeout(() => playKey(4 * 12 + (N + 3)), 1000) &
                        setTimeout(() => playKey(4 * 12 + (N + 7)), 1500)}>
                        <FiPlayCircle size={'2vw'} /></div>
                

                    <div><Note note={bT} /><h3>T</h3></div>
                    <span>T</span>
                    <div><Note note={b9} /><h3>9</h3></div>
                    <span>T</span>
                    <div><Note note={b3m} /><h3>3m</h3></div>
                    <span>3ST</span>
                    <div><Note note={b5J} /><h3>5J</h3></div>
                </div>
            </>
                : <></>
            }

        </div>)

}
