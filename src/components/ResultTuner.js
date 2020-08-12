import React from 'react'

export default props => {


    /* eslint-disable */

    const E1 = <button onClick={() => playKey(4 * 12 + 28-12)}>E</button>
    const D1 = <button onClick={() => playKey(4 * 12 + 26-12)}>D</button>
    const B = <button onClick={() => playKey(4 * 12 + 23-12)}>B</button>
    const A1 = <button onClick={() => playKey(4 * 12 + 21-12)}>A</button>
    const G = <button onClick={() => playKey(4 * 12 + 19-12)}>G</button>
    const D = <button onClick={() => playKey(4 * 12 + 14-12)}>D</button>
    const A = <button onClick={() => playKey(4 * 12 + 9-12)}>A</button>
    const E2 = <button onClick={() => playKey(4 * 12 + 4-12)}>E</button>
    const D2 = <button onClick={() => playKey(4 * 12 + 2-12)}>D</button>

    return (
        <div className="result">

            {props.tuner === "E" ? <>
                <div className="resultNotes">

                    <div>{E1}<h3>1ª</h3></div>
                    <div>{B}<h3>2ª</h3></div>
                    <div>{G}<h3>3ª</h3></div>
                    <div>{D}<h3>4ª</h3></div>
                    <div>{A}<h3>5ª</h3></div>
                    <div>{E2}<h3>6ª</h3></div>
                </div>
            </>
                : <></>
            }

            {props.tuner === "D" ? <>
                <div className="resultNotes">

                    <div>{D1}<h3>1ª</h3></div>
                    <div>{A1}<h3>2ª</h3></div>
                    <div>{G}<h3>3ª</h3></div>
                    <div>{D}<h3>4ª</h3></div>
                    <div>{A}<h3>5ª</h3></div>
                    <div>{D2}<h3>6ª</h3></div>
                </div>
            </>
                : <></>
            }
            


        </div>
    )

}
