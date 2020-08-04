import React from 'react'
import Note from './Note'
import Notes from '../data/notes'
import { FiPlayCircle } from 'react-icons/fi'

export default props => {

    /* eslint-disable */

    const result = Notes.find(n1 => n1.note === props.Tonica);

    const N = result.id
    const bT = <button onClick={() => playKey(4 * 12 + (N))}>{props.Tonica}</button>
    const b2 = <button onClick={() => playKey(4 * 12 + (N + 1))}>{Notes[N + 1].note}</button>
    const b3 = <button onClick={() => playKey(4 * 12 + (N + 2))}>{Notes[N + 2].note}</button>
    const b4 = <button onClick={() => playKey(4 * 12 + (N + 3))}>{Notes[N + 3].note}</button>
    const b5 = <button onClick={() => playKey(4 * 12 + (N + 4))}>{Notes[N + 4].note}</button>
    const b6 = <button onClick={() => playKey(4 * 12 + (N + 5))}>{Notes[N + 5].note}</button>
    const b7 = <button onClick={() => playKey(4 * 12 + (N + 6))}>{Notes[N + 6].note}</button>
    const b8 = <button onClick={() => playKey(4 * 12 + (N + 7))}>{Notes[N + 7].note}</button>
    const b9 = <button onClick={() => playKey(4 * 12 + (N + 8))}>{Notes[N + 8].note}</button>
    const b10 = <button onClick={() => playKey(4 * 12 + (N + 9))}>{Notes[N + 9].note}</button>
    const b11 = <button onClick={() => playKey(4 * 12 + (N + 10))}>{Notes[N + 10].note}</button>
    const b12 = <button onClick={() => playKey(4 * 12 + (N + 11))}>{Notes[N + 11].note}</button>
    const b13 = <button onClick={() => playKey(4 * 12 + (N + 12))}>{Notes[N + 12].note}</button>


    // const nb3m = Notes[N + 4].note + 'b'
    // var r = nb3m.replace("#b", "")
    // const b3m = <button onClick={() => playKey(4 * 12 + (N + 3))}>{r}</button>

    // const b5J = <button onClick={() => playKey(4 * 12 + (N + 7))}>{Notes[N + 7].note}</button>
    // const b7M = <button onClick={() => playKey(4 * 12 + (N + 11))}>{Notes[N + 11].note}</button>

    // const nb7m = Notes[N + 11].note + 'b'
    // r = nb7m.replace("#b", "")
    // const b7m = <button onClick={() => playKey(4 * 12 + (N + 10))}>{r}</button>

    return (

        <div className="result">

            {props.Scale === "JÔNICO" ? <>
                <div className="player">

                    <div className="sound" onClick={() => setTimeout(() =>
                        playKey(4 * 12 + (N)), 0) &
                        setTimeout(() => playKey(4 * 12 + (N + 2)), 500) &
                        setTimeout(() => playKey(4 * 12 + (N + 4)), 1000) &
                        setTimeout(() => playKey(4 * 12 + (N + 5)), 1500) &
                        setTimeout(() => playKey(4 * 12 + (N + 7)), 2000) &
                        setTimeout(() => playKey(4 * 12 + (N + 9)), 2500) &
                        setTimeout(() => playKey(4 * 12 + (N + 11)), 3000) &
                        setTimeout(() => playKey(4 * 12 + (N + 12)), 3500)}>
                        <FiPlayCircle size={'2vw'} />Tocar arpejo lento</div>

                    <div className="sound" onClick={() => setTimeout(() =>
                        playKey(4 * 12 + (N)), 0) &
                        setTimeout(() => playKey(4 * 12 + (N + 2)), 200) &
                        setTimeout(() => playKey(4 * 12 + (N + 4)), 400) &
                        setTimeout(() => playKey(4 * 12 + (N + 5)), 600) &
                        setTimeout(() => playKey(4 * 12 + (N + 7)), 800) &
                        setTimeout(() => playKey(4 * 12 + (N + 9)), 1000) &
                        setTimeout(() => playKey(4 * 12 + (N + 11)),1200) &
                        setTimeout(() => playKey(4 * 12 + (N + 12)),1400)}>
                        <FiPlayCircle size={'2vw'} />Tocar arpejo rápido</div>
                </div>

                <div className="resultNotes">
                    <div><Note note={bT} /><h3>T</h3></div>
                    <span>T</span>
                    <div><Note note={b3} /><h3>2ª</h3></div>
                    <span>T</span>
                    <div><Note note={b5} /><h3>3ª</h3></div>
                    <span>ST</span>
                    <div><Note note={b6} /><h3>4ª</h3></div>
                    <span>T</span>
                    <div><Note note={b8} /><h3>5ª</h3></div>
                    <span>T</span>
                    <div><Note note={b10} /><h3>6ª</h3></div>
                    <span>T</span>
                    <div><Note note={b12} /><h3>7ª</h3></div>
                    <span>ST</span>
                    <div><Note note={b13} /><h3>8ª</h3></div>

                </div>
            </>
                : <></>
            }

            {props.Scale === "DÓRICO" ? <>
                <div className="player">

                    <div className="sound" onClick={() => setTimeout(() =>
                        playKey(4 * 12 + (N)), 0) &
                        setTimeout(() => playKey(4 * 12 + (N + 2)), 500) &
                        setTimeout(() => playKey(4 * 12 + (N + 3)), 1000) &
                        setTimeout(() => playKey(4 * 12 + (N + 5)), 1500) &
                        setTimeout(() => playKey(4 * 12 + (N + 7)), 2000) &
                        setTimeout(() => playKey(4 * 12 + (N + 9)), 2500) &
                        setTimeout(() => playKey(4 * 12 + (N + 10)), 3000) &
                        setTimeout(() => playKey(4 * 12 + (N + 12)), 3500)}>
                        <FiPlayCircle size={'2vw'} />Tocar arpejo lento</div>

                    <div className="sound" onClick={() => setTimeout(() =>
                        playKey(4 * 12 + (N)), 0) &
                        setTimeout(() => playKey(4 * 12 + (N + 2)), 200) &
                        setTimeout(() => playKey(4 * 12 + (N + 3)), 400)  &
                        setTimeout(() => playKey(4 * 12 + (N + 5)), 600)  &
                        setTimeout(() => playKey(4 * 12 + (N + 7)), 800)  &
                        setTimeout(() => playKey(4 * 12 + (N + 9)), 1000) &
                        setTimeout(() => playKey(4 * 12 + (N + 10)), 1200) &
                        setTimeout(() => playKey(4 * 12 + (N + 12)), 1400)}>
                        <FiPlayCircle size={'2vw'} />Tocar arpejo rápido</div>
                </div>

                <div className="resultNotes">
                    <div><Note note={bT} /><h3>T</h3></div>
                    <span>T</span>
                    <div><Note note={b3} /><h3>2ª</h3></div>
                    <span>T</span>
                    <div><Note note={b4} /><h3>3ª</h3></div>
                    <span>ST</span>
                    <div><Note note={b6} /><h3>4ª</h3></div>
                    <span>T</span>
                    <div><Note note={b8} /><h3>5ª</h3></div>
                    <span>T</span>
                    <div><Note note={b10} /><h3>6ª</h3></div>
                    <span>T</span>
                    <div><Note note={b11} /><h3>7ª</h3></div>
                    <span>ST</span>
                    <div><Note note={b13} /><h3>8ª</h3></div>

                </div>
            </>
                : <></>
            }

            {props.Scale === "FRÍGIO" ? <>
                <div className="player">

                    <div className="sound" onClick={() => setTimeout(() =>
                        playKey(4 * 12 + (N)), 0) &
                        setTimeout(() => playKey(4 * 12 + (N + 1)), 500) &
                        setTimeout(() => playKey(4 * 12 + (N + 3)), 1000) &
                        setTimeout(() => playKey(4 * 12 + (N + 5)), 1500) &
                        setTimeout(() => playKey(4 * 12 + (N + 7)), 2000) &
                        setTimeout(() => playKey(4 * 12 + (N + 8)), 2500) &
                        setTimeout(() => playKey(4 * 12 + (N + 10)), 3000) &
                        setTimeout(() => playKey(4 * 12 + (N + 12)), 3500)}>
                        <FiPlayCircle size={'2vw'} />Tocar arpejo lento</div>

                    <div className="sound" onClick={() => setTimeout(() =>
                        playKey(4 * 12 + (N)), 0) &
                        setTimeout(() => playKey(4 * 12 + (N + 1)), 200) &
                        setTimeout(() => playKey(4 * 12 + (N + 3)), 400)  &
                        setTimeout(() => playKey(4 * 12 + (N + 5)), 600)  &
                        setTimeout(() => playKey(4 * 12 + (N + 7)), 800)  &
                        setTimeout(() => playKey(4 * 12 + (N + 8)), 1000) &
                        setTimeout(() => playKey(4 * 12 + (N + 10)), 1200) &
                        setTimeout(() => playKey(4 * 12 + (N + 12)), 1400)}>
                        <FiPlayCircle size={'2vw'} />Tocar arpejo rápido</div>
                </div>

                <div className="resultNotes">
                    <div><Note note={bT} /><h3>T</h3></div>
                    <span>ST</span>
                    <div><Note note={b2} /><h3>2ª</h3></div>
                    <span>T</span>
                    <div><Note note={b4} /><h3>3ª</h3></div>
                    <span>T</span>
                    <div><Note note={b6} /><h3>4ª</h3></div>
                    <span>T</span>
                    <div><Note note={b8} /><h3>5ª</h3></div>
                    <span>ST</span>
                    <div><Note note={b9} /><h3>6ª</h3></div>
                    <span>T</span>
                    <div><Note note={b11} /><h3>7ª</h3></div>
                    <span>T</span>
                    <div><Note note={b13} /><h3>8ª</h3></div>

                </div>
            </>
                : <></>
            }

            {props.Scale === "LÍDIO" ? <>
                <div className="player">

                    <div className="sound" onClick={() => setTimeout(() =>
                        playKey(4 * 12 + (N)), 0) &
                        setTimeout(() => playKey(4 * 12 + (N + 2)), 500) &
                        setTimeout(() => playKey(4 * 12 + (N + 4)), 1000) &
                        setTimeout(() => playKey(4 * 12 + (N + 6)), 1500) &
                        setTimeout(() => playKey(4 * 12 + (N + 7)), 2000) &
                        setTimeout(() => playKey(4 * 12 + (N + 9)), 2500) &
                        setTimeout(() => playKey(4 * 12 + (N + 11)), 3000) &
                        setTimeout(() => playKey(4 * 12 + (N + 12)), 3500)}>
                        <FiPlayCircle size={'2vw'} />Tocar arpejo lento</div>

                    <div className="sound" onClick={() => setTimeout(() =>
                        playKey(4 * 12 + (N)), 0) &
                        setTimeout(() => playKey(4 * 12 + (N + 2)), 200) &
                        setTimeout(() => playKey(4 * 12 + (N + 4)), 400)  &
                        setTimeout(() => playKey(4 * 12 + (N + 6)), 600)  &
                        setTimeout(() => playKey(4 * 12 + (N + 7)), 800)  &
                        setTimeout(() => playKey(4 * 12 + (N + 9)), 1000) &
                        setTimeout(() => playKey(4 * 12 + (N + 11)), 1200) &
                        setTimeout(() => playKey(4 * 12 + (N + 12)), 1400)}>
                        <FiPlayCircle size={'2vw'} />Tocar arpejo rápido</div>
                </div>

                <div className="resultNotes">
                    <div><Note note={bT} /><h3>T</h3></div>
                    <span>T</span>
                    <div><Note note={b3} /><h3>2ª</h3></div>
                    <span>T</span>
                    <div><Note note={b5} /><h3>3ª</h3></div>
                    <span>T</span>
                    <div><Note note={b7} /><h3>4ª</h3></div>
                    <span>ST</span>
                    <div><Note note={b8} /><h3>5ª</h3></div>
                    <span>T</span>
                    <div><Note note={b10} /><h3>6ª</h3></div>
                    <span>T</span>
                    <div><Note note={b12} /><h3>7ª</h3></div>
                    <span>ST</span>
                    <div><Note note={b13} /><h3>8ª</h3></div>

                </div>
            </>
                : <></>
            }

            {props.Scale === "MIXOLÍDIO" ? <>
                <div className="player">

                    <div className="sound" onClick={() => setTimeout(() =>
                        playKey(4 * 12 + (N)), 0) &
                        setTimeout(() => playKey(4 * 12 + (N + 2)), 500) &
                        setTimeout(() => playKey(4 * 12 + (N + 4)), 1000) &
                        setTimeout(() => playKey(4 * 12 + (N + 5)), 1500) &
                        setTimeout(() => playKey(4 * 12 + (N + 7)), 2000) &
                        setTimeout(() => playKey(4 * 12 + (N + 9)), 2500) &
                        setTimeout(() => playKey(4 * 12 + (N + 10)), 3000) &
                        setTimeout(() => playKey(4 * 12 + (N + 12)), 3500)}>
                        <FiPlayCircle size={'2vw'} />Tocar arpejo lento</div>

                    <div className="sound" onClick={() => setTimeout(() =>
                        playKey(4 * 12 + (N)), 0) &
                        setTimeout(() => playKey(4 * 12 + (N + 2)), 200) &
                        setTimeout(() => playKey(4 * 12 + (N + 4)), 400)  &
                        setTimeout(() => playKey(4 * 12 + (N + 5)), 600)  &
                        setTimeout(() => playKey(4 * 12 + (N + 7)), 800)  &
                        setTimeout(() => playKey(4 * 12 + (N + 9)), 1000) &
                        setTimeout(() => playKey(4 * 12 + (N + 10)), 1200) &
                        setTimeout(() => playKey(4 * 12 + (N + 12)), 1400)}>
                        <FiPlayCircle size={'2vw'} />Tocar arpejo rápido</div>
                </div>

                <div className="resultNotes">
                    <div><Note note={bT} /><h3>T</h3></div>
                    <span>T</span>
                    <div><Note note={b3} /><h3>2ª</h3></div>
                    <span>T</span>
                    <div><Note note={b5} /><h3>3ª</h3></div>
                    <span>ST</span>
                    <div><Note note={b6} /><h3>4ª</h3></div>
                    <span>T</span>
                    <div><Note note={b8} /><h3>5ª</h3></div>
                    <span>T</span>
                    <div><Note note={b10} /><h3>6ª</h3></div>
                    <span>ST</span>
                    <div><Note note={b11} /><h3>7ª</h3></div>
                    <span>T</span>
                    <div><Note note={b13} /><h3>8ª</h3></div>

                </div>
            </>
                : <></>
            }

            {props.Scale === "EÓLICO" ? <>
                <div className="player">

                    <div className="sound" onClick={() => setTimeout(() =>
                        playKey(4 * 12 + (N)), 0) &
                        setTimeout(() => playKey(4 * 12 + (N + 2)), 500) &
                        setTimeout(() => playKey(4 * 12 + (N + 3)), 1000) &
                        setTimeout(() => playKey(4 * 12 + (N + 5)), 1500) &
                        setTimeout(() => playKey(4 * 12 + (N + 7)), 2000) &
                        setTimeout(() => playKey(4 * 12 + (N + 8)), 2500) &
                        setTimeout(() => playKey(4 * 12 + (N + 10)), 3000) &
                        setTimeout(() => playKey(4 * 12 + (N + 12)), 3500)}>
                        <FiPlayCircle size={'2vw'} />Tocar arpejo lento</div>

                    <div className="sound" onClick={() => setTimeout(() =>
                        playKey(4 * 12 + (N)), 0) &
                        setTimeout(() => playKey(4 * 12 + (N + 2)), 200) &
                        setTimeout(() => playKey(4 * 12 + (N + 3)), 400)  &
                        setTimeout(() => playKey(4 * 12 + (N + 5)), 600)  &
                        setTimeout(() => playKey(4 * 12 + (N + 7)), 800)  &
                        setTimeout(() => playKey(4 * 12 + (N + 8)), 1000) &
                        setTimeout(() => playKey(4 * 12 + (N + 10)), 1200) &
                        setTimeout(() => playKey(4 * 12 + (N + 12)), 1400)}>
                        <FiPlayCircle size={'2vw'} />Tocar arpejo rápido</div>
                </div>

                <div className="resultNotes">
                    <div><Note note={bT} /><h3>T</h3></div>
                    <span>T</span>
                    <div><Note note={b3} /><h3>2ª</h3></div>
                    <span>ST</span>
                    <div><Note note={b4} /><h3>3ª</h3></div>
                    <span>T</span>
                    <div><Note note={b6} /><h3>4ª</h3></div>
                    <span>T</span>
                    <div><Note note={b8} /><h3>5ª</h3></div>
                    <span>ST</span>
                    <div><Note note={b9} /><h3>6ª</h3></div>
                    <span>T</span>
                    <div><Note note={b11} /><h3>7ª</h3></div>
                    <span>T</span>
                    <div><Note note={b13} /><h3>8ª</h3></div>

                </div>
            </>
                : <></>
            }

            {props.Scale === "LÓCRIO" ? <>
                <div className="player">

                    <div className="sound" onClick={() => setTimeout(() =>
                        playKey(4 * 12 + (N)), 0) &
                        setTimeout(() => playKey(4 * 12 + (N + 1)), 500) &
                        setTimeout(() => playKey(4 * 12 + (N + 3)), 1000) &
                        setTimeout(() => playKey(4 * 12 + (N + 5)), 1500) &
                        setTimeout(() => playKey(4 * 12 + (N + 6)), 2000) &
                        setTimeout(() => playKey(4 * 12 + (N + 8)), 2500) &
                        setTimeout(() => playKey(4 * 12 + (N + 10)), 3000) &
                        setTimeout(() => playKey(4 * 12 + (N + 12)), 3500)}>
                        <FiPlayCircle size={'2vw'} />Tocar arpejo lento</div>

                    <div className="sound" onClick={() => setTimeout(() =>
                        playKey(4 * 12 + (N)), 0) &
                        setTimeout(() => playKey(4 * 12 + (N + 1)), 200) &
                        setTimeout(() => playKey(4 * 12 + (N + 3)), 400)  &
                        setTimeout(() => playKey(4 * 12 + (N + 5)), 600)  &
                        setTimeout(() => playKey(4 * 12 + (N + 6)), 800)  &
                        setTimeout(() => playKey(4 * 12 + (N + 8)), 1000) &
                        setTimeout(() => playKey(4 * 12 + (N + 10)), 1200) &
                        setTimeout(() => playKey(4 * 12 + (N + 12)), 1400)}>
                        <FiPlayCircle size={'2vw'} />Tocar arpejo rápido</div>
                </div>

                <div className="resultNotes">
                    <div><Note note={bT} /><h3>T</h3></div>
                    <span>ST</span>
                    <div><Note note={b2} /><h3>2ª</h3></div>
                    <span>T</span>
                    <div><Note note={b4} /><h3>3ª</h3></div>
                    <span>T</span>
                    <div><Note note={b6} /><h3>4ª</h3></div>
                    <span>ST</span>
                    <div><Note note={b7} /><h3>5ª</h3></div>
                    <span>T</span>
                    <div><Note note={b9} /><h3>6ª</h3></div>
                    <span>T</span>
                    <div><Note note={b11} /><h3>7ª</h3></div>
                    <span>T</span>
                    <div><Note note={b13} /><h3>8ª</h3></div>

                </div>
            </>
                : <></>
            }

        </div>

    )

}
