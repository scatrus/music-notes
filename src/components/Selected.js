import React from 'react'
import Notes from '../data/notes'
/* eslint-disable */

export default (props) => {
    const result = Notes.find(n1 => n1.note === props.Tonica);
    const N = result.id

    return (<>
        {props.chord === "M" ? <>

            <div className="selected" onClick={() => playKey(4 * 12 + (N)) &
                playKey(4 * 12 + (N + 4)) &
                playKey(4 * 12 + (N + 7)) &
                setTimeout(() => playKey(4 * 12 + (N)), 1000) &
                setTimeout(() => playKey(4 * 12 + (N + 4)), 1200) &
                setTimeout(() => playKey(4 * 12 + (N + 7)), 1400)
            }>
                <span>{props.note}</span>
            </div>

        </>
            : <></>
        }

        {props.chord === "m" ? <>

            <div className="selected" onClick={() => playKey(4 * 12 + (N)) &
                playKey(4 * 12 + (N + 3)) &
                playKey(4 * 12 + (N + 7)) &
                setTimeout(() => playKey(4 * 12 + (N)), 1000) &
                setTimeout(() => playKey(4 * 12 + (N + 3)), 1200) &
                setTimeout(() => playKey(4 * 12 + (N + 7)), 1400)
            }>
                <span> {props.note}</span>
            </div>

        </>
            : <></>
        }

        {props.chord === "7" ? <>

            <div className="selected" onClick={() => playKey(4 * 12 + (N)) &
                playKey(4 * 12 + (N + 4)) &
                playKey(4 * 12 + (N + 7)) &
                playKey(4 * 12 + (N + 10)) &
                setTimeout(() => playKey(4 * 12 + (N)), 1000) &
                setTimeout(() => playKey(4 * 12 + (N + 4)), 1200) &
                setTimeout(() => playKey(4 * 12 + (N + 7)), 1400) &
                setTimeout(() => playKey(4 * 12 + (N + 10)), 1600)
            }>
                <span> {props.note}</span>
            </div>

        </>
            : <></>
        }

        {props.chord === "7M" ? <>

            <div className="selected" onClick={() => playKey(4 * 12 + (N)) &
                playKey(4 * 12 + (N + 4)) &
                playKey(4 * 12 + (N + 7)) &
                playKey(4 * 12 + (N + 11)) &
                setTimeout(() => playKey(4 * 12 + (N)), 1000) &
                setTimeout(() => playKey(4 * 12 + (N + 4)), 1200) &
                setTimeout(() => playKey(4 * 12 + (N + 7)), 1400) &
                setTimeout(() => playKey(4 * 12 + (N + 11)), 1600)
            }>
                <span> {props.note}</span>
            </div>

        </>
            : <></>
        }

        {props.chord === "m7M" ? <>

            <div className="selected" onClick={() => playKey(4 * 12 + (N)) &
                playKey(4 * 12 + (N + 3)) &
                playKey(4 * 12 + (N + 7)) &
                playKey(4 * 12 + (N + 11)) &
                setTimeout(() => playKey(4 * 12 + (N)), 1000) &
                setTimeout(() => playKey(4 * 12 + (N + 3)), 1200) &
                setTimeout(() => playKey(4 * 12 + (N + 7)), 1400) &
                setTimeout(() => playKey(4 * 12 + (N + 11)), 1600)
            }>
                <span> {props.note}</span>
            </div>

        </>
            : <></>
        }

        {props.chord === "m7" ? <>

            <div className="selected" onClick={() => playKey(4 * 12 + (N)) &
                playKey(4 * 12 + (N + 3)) &
                playKey(4 * 12 + (N + 7)) &
                playKey(4 * 12 + (N + 10)) &
                setTimeout(() => playKey(4 * 12 + (N)), 1000) &
                setTimeout(() => playKey(4 * 12 + (N + 3)), 1200) &
                setTimeout(() => playKey(4 * 12 + (N + 7)), 1400) &
                setTimeout(() => playKey(4 * 12 + (N + 10)), 1600)
            }>
                <span> {props.note}</span>
            </div>

        </>
            : <></>
        }

        {props.chord === "9" ? <>

            <div className="selected" onClick={() => playKey(4 * 12 + (N)) &
                playKey(4 * 12 + (N + 4)) &
                playKey(4 * 12 + (N + 7)) &
                playKey(4 * 12 + (N + 14)) &
                setTimeout(() => playKey(4 * 12 + (N)), 1000) &
                setTimeout(() => playKey(4 * 12 + (N + 4)), 1200) &
                setTimeout(() => playKey(4 * 12 + (N + 7)), 1400) &
                setTimeout(() => playKey(4 * 12 + (N + 14)), 1600)
            }>
                <span> {props.note}</span>
            </div>

        </>
            : <></>
        }

        {props.chord === "m9" ? <>

            <div className="selected" onClick={() => playKey(4 * 12 + (N)) &
                playKey(4 * 12 + (N + 3)) &
                playKey(4 * 12 + (N + 7)) &
                playKey(4 * 12 + (N + 14)) &
                setTimeout(() => playKey(4 * 12 + (N)), 1000) &
                setTimeout(() => playKey(4 * 12 + (N + 3)), 1200) &
                setTimeout(() => playKey(4 * 12 + (N + 7)), 1400) &
                setTimeout(() => playKey(4 * 12 + (N + 14)), 1600)
            }>
                <span> {props.note}</span>
            </div>

        </>
            : <></>
        }

    </>)





}






