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

        {props.Scale === "JÔNICO" ? <>

        <div className="selected" onClick={() => setTimeout(() =>
                playKey(4 * 12 + (N)), 0) &
                setTimeout(() => playKey(4 * 12 + (N + 2)), 500) &
                setTimeout(() => playKey(4 * 12 + (N + 4)), 1000) &
                setTimeout(() => playKey(4 * 12 + (N + 5)), 1500) &
                setTimeout(() => playKey(4 * 12 + (N + 7)), 2000) &
                setTimeout(() => playKey(4 * 12 + (N + 9)), 2500) &
                setTimeout(() => playKey(4 * 12 + (N + 11)), 3000) &
                setTimeout(() => playKey(4 * 12 + (N + 12)), 3500) &
                setTimeout(() => playKey(4 * 12 + (N + 2)), 4000) &
                setTimeout(() => playKey(4 * 12 + (N + 4)), 4200) &
                setTimeout(() => playKey(4 * 12 + (N + 5)), 4400) &
                setTimeout(() => playKey(4 * 12 + (N + 7)), 4600) &
                setTimeout(() => playKey(4 * 12 + (N + 9)), 4800) &
                setTimeout(() => playKey(4 * 12 + (N + 11)), 5000) &
                setTimeout(() => playKey(4 * 12 + (N + 12)), 5200)

            }>
                <span> {props.note}</span>
            </div>

        </>
            : <></>
        }

{props.Scale === "DÓRICO" ? <>

<div className="selected" onClick={() => setTimeout(() =>
        playKey(4 * 12 + (N)), 0) &
        setTimeout(() => playKey(4 * 12 + (N + 2)), 500) &
        setTimeout(() => playKey(4 * 12 + (N + 3)), 1000) &
        setTimeout(() => playKey(4 * 12 + (N + 5)), 1500) &
        setTimeout(() => playKey(4 * 12 + (N + 7)), 2000) &
        setTimeout(() => playKey(4 * 12 + (N + 9)), 2500) &
        setTimeout(() => playKey(4 * 12 + (N + 10)), 3000) &
        setTimeout(() => playKey(4 * 12 + (N + 12)), 3500) &
        setTimeout(() => playKey(4 * 12 + (N + 2)), 4000) &
        setTimeout(() => playKey(4 * 12 + (N + 3)), 4200) &
        setTimeout(() => playKey(4 * 12 + (N + 5)), 4400) &
        setTimeout(() => playKey(4 * 12 + (N + 7)), 4600) &
        setTimeout(() => playKey(4 * 12 + (N + 9)), 4800) &
        setTimeout(() => playKey(4 * 12 + (N + 10)), 5000) &
        setTimeout(() => playKey(4 * 12 + (N + 12)), 5200)

    }>
        <span> {props.note}</span>
    </div>

</>
    : <></>
}

{props.Scale === "FRÍGIO" ? <>

        <div className="selected" onClick={() => setTimeout(() =>
                playKey(4 * 12 + (N)), 0) &
                setTimeout(() => playKey(4 * 12 + (N + 1)), 500) &
                setTimeout(() => playKey(4 * 12 + (N + 3)), 1000) &
                setTimeout(() => playKey(4 * 12 + (N + 5)), 1500) &
                setTimeout(() => playKey(4 * 12 + (N + 7)), 2000) &
                setTimeout(() => playKey(4 * 12 + (N + 8)), 2500) &
                setTimeout(() => playKey(4 * 12 + (N + 10)), 3000) &
                setTimeout(() => playKey(4 * 12 + (N + 12)), 3500) &
                setTimeout(() => playKey(4 * 12 + (N + 1)), 4000) &
                setTimeout(() => playKey(4 * 12 + (N + 3)), 4200) &
                setTimeout(() => playKey(4 * 12 + (N + 5)), 4400) &
                setTimeout(() => playKey(4 * 12 + (N + 7)), 4600) &
                setTimeout(() => playKey(4 * 12 + (N + 8)), 4800) &
                setTimeout(() => playKey(4 * 12 + (N + 10)), 5000) &
                setTimeout(() => playKey(4 * 12 + (N + 12)), 5200)

            }>
                <span> {props.note}</span>
            </div>

        </>
            : <></>
        }

{props.Scale === "LÍDIO" ? <>

<div className="selected" onClick={() => setTimeout(() =>
        playKey(4 * 12 + (N)), 0) &
        setTimeout(() => playKey(4 * 12 + (N + 2)), 500) &
        setTimeout(() => playKey(4 * 12 + (N + 4)), 1000) &
        setTimeout(() => playKey(4 * 12 + (N + 6)), 1500) &
        setTimeout(() => playKey(4 * 12 + (N + 7)), 2000) &
        setTimeout(() => playKey(4 * 12 + (N + 9)), 2500) &
        setTimeout(() => playKey(4 * 12 + (N + 11)), 3000) &
        setTimeout(() => playKey(4 * 12 + (N + 12)), 3500) &
        setTimeout(() => playKey(4 * 12 + (N + 2)), 4000) &
        setTimeout(() => playKey(4 * 12 + (N + 4)), 4200) &
        setTimeout(() => playKey(4 * 12 + (N + 6)), 4400) &
        setTimeout(() => playKey(4 * 12 + (N + 7)), 4600) &
        setTimeout(() => playKey(4 * 12 + (N + 9)), 4800) &
        setTimeout(() => playKey(4 * 12 + (N + 11)), 5000) &
        setTimeout(() => playKey(4 * 12 + (N + 12)), 5200)

    }>
        <span> {props.note}</span>
    </div>

</>
    : <></>
}

{props.Scale === "MIXOLÍDIO" ? <>

        <div className="selected" onClick={() => setTimeout(() =>
                playKey(4 * 12 + (N)), 0) &
                setTimeout(() => playKey(4 * 12 + (N + 2)), 500) &
                setTimeout(() => playKey(4 * 12 + (N + 4)), 1000) &
                setTimeout(() => playKey(4 * 12 + (N + 5)), 1500) &
                setTimeout(() => playKey(4 * 12 + (N + 7)), 2000) &
                setTimeout(() => playKey(4 * 12 + (N + 9)), 2500) &
                setTimeout(() => playKey(4 * 12 + (N + 10)), 3000) &
                setTimeout(() => playKey(4 * 12 + (N + 12)), 3500) &
                setTimeout(() => playKey(4 * 12 + (N + 2)), 4000) &
                setTimeout(() => playKey(4 * 12 + (N + 4)), 4200) &
                setTimeout(() => playKey(4 * 12 + (N + 5)), 4400) &
                setTimeout(() => playKey(4 * 12 + (N + 7)), 4600) &
                setTimeout(() => playKey(4 * 12 + (N + 9)), 4800) &
                setTimeout(() => playKey(4 * 12 + (N + 10)), 5000) &
                setTimeout(() => playKey(4 * 12 + (N + 12)), 5200)

            }>
                <span> {props.note}</span>
            </div>

        </>
            : <></>
        }

{props.Scale === "EÓLICO" ? <>

<div className="selected" onClick={() => setTimeout(() =>
        playKey(4 * 12 + (N)), 0) &
        setTimeout(() => playKey(4 * 12 + (N + 2)), 500) &
        setTimeout(() => playKey(4 * 12 + (N + 3)), 1000) &
        setTimeout(() => playKey(4 * 12 + (N + 5)), 1500) &
        setTimeout(() => playKey(4 * 12 + (N + 7)), 2000) &
        setTimeout(() => playKey(4 * 12 + (N + 8)), 2500) &
        setTimeout(() => playKey(4 * 12 + (N + 10)), 3000) &
        setTimeout(() => playKey(4 * 12 + (N + 12)), 3500) &
        setTimeout(() => playKey(4 * 12 + (N + 2)), 4000) &
        setTimeout(() => playKey(4 * 12 + (N + 3)), 4200) &
        setTimeout(() => playKey(4 * 12 + (N + 5)), 4400) &
        setTimeout(() => playKey(4 * 12 + (N + 7)), 4600) &
        setTimeout(() => playKey(4 * 12 + (N + 8)), 4800) &
        setTimeout(() => playKey(4 * 12 + (N + 10)), 5000) &
        setTimeout(() => playKey(4 * 12 + (N + 12)), 5200)

    }>
        <span> {props.note}</span>
    </div>

</>
    : <></>
}

{props.Scale === "LÓCRIO" ? <>

        <div className="selected" onClick={() => setTimeout(() =>
                playKey(4 * 12 + (N)), 0) &
                setTimeout(() => playKey(4 * 12 + (N + 1)), 500) &
                setTimeout(() => playKey(4 * 12 + (N + 3)), 1000) &
                setTimeout(() => playKey(4 * 12 + (N + 5)), 1500) &
                setTimeout(() => playKey(4 * 12 + (N + 7)), 2000) &
                setTimeout(() => playKey(4 * 12 + (N + 8)), 2500) &
                setTimeout(() => playKey(4 * 12 + (N + 10)), 3000) &
                setTimeout(() => playKey(4 * 12 + (N + 12)), 3500) &
                setTimeout(() => playKey(4 * 12 + (N + 1)), 4000) &
                setTimeout(() => playKey(4 * 12 + (N + 3)), 4200) &
                setTimeout(() => playKey(4 * 12 + (N + 5)), 4400) &
                setTimeout(() => playKey(4 * 12 + (N + 7)), 4600) &
                setTimeout(() => playKey(4 * 12 + (N + 8)), 4800) &
                setTimeout(() => playKey(4 * 12 + (N + 10)), 5000) &
                setTimeout(() => playKey(4 * 12 + (N + 12)), 5200)

            }>
                <span> {props.note}</span>
            </div>

        </>
            : <></>
        }

    </>)





}






