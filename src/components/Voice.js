import React, { useState } from 'react'
import Notes from '../data/notes'

export default props => {

    /* eslint-disable */

    const result = Notes.find(n1 => n1.note === props.Tonica);

    const N = result.id

    const bT = <button onClick={() => playKey(4 * 12 + (N))}>{props.Tonica}</button>
    // const b2 = <button onClick={() => playKey(4 * 12 + (N + 1))}>{Notes[N + 1].note}</button>
    const b3 = <button onClick={() => playKey(4 * 12 + (N + 2))}>{Notes[N + 2].note}</button>
    // const b4 = <button onClick={() => playKey(4 * 12 + (N + 3))}>{Notes[N + 3].note}</button>
    const b5 = <button onClick={() => playKey(4 * 12 + (N + 4))}>{Notes[N + 4].note}</button>
    const b6 = <button onClick={() => playKey(4 * 12 + (N + 5))}>{Notes[N + 5].note}</button>
    // const b7 = <button onClick={() => playKey(4 * 12 + (N + 6))}>{Notes[N + 6].note}</button>
    const b8 = <button onClick={() => playKey(4 * 12 + (N + 7))}>{Notes[N + 7].note}</button>
    // const b9 = <button onClick={() => playKey(4 * 12 + (N + 8))}>{Notes[N + 8].note}</button>
    const b10 = <button onClick={() => playKey(4 * 12 + (N + 9))}>{Notes[N + 9].note}</button>
    // const b11 = <button onClick={() => playKey(4 * 12 + (N + 10))}>{Notes[N + 10].note}</button>
    const b12 = <button onClick={() => playKey(4 * 12 + (N + 11))}>{Notes[N + 11].note}</button>
    const b13 = <button onClick={() => playKey(4 * 12 + (N + 12))}>{Notes[N + 12].note}</button>

    const Notas = [
        { id: 0, note: props.Tonica, button: <button id="0" onClick={() => playKey(4 * 12 + (N))}>{props.Tonica}</button> },
        { id: 2, note: Notes[N + 2].note, button: <button id="1" onClick={() => playKey(4 * 12 + (N + 2))}>{Notes[N + 2].note}</button> },
        { id: 4, note: Notes[N + 4].note, button: <button id="2" onClick={() => playKey(4 * 12 + (N + 4))}>{Notes[N + 4].note}</button> },
        { id: 5, note: Notes[N + 5].note, button: <button id="3" onClick={() => playKey(4 * 12 + (N + 5))}>{Notes[N + 5].note}</button> },
        { id: 7, note: Notes[N + 7].note, button: <button id="4" onClick={() => playKey(4 * 12 + (N + 7))}>{Notes[N + 7].note}</button> },
        { id: 9, note: Notes[N + 9].note, button: <button id="5" onClick={() => playKey(4 * 12 + (N + 9))}>{Notes[N + 9].note}</button> },
        { id: 11, note: Notes[N + 11].note, button: <button id="6" onClick={() => playKey(4 * 12 + (N + 11))}>{Notes[N + 11].note}</button> },
        { id: 12, note: Notes[N + 12].note, button: <button id="7" onClick={() => playKey(4 * 12 + (N + 12))}>{Notes[N + 12].note}</button> },
        { id: 14, note: Notes[N + 14].note, button: <button id="8" onClick={() => playKey(4 * 12 + (N + 14))}>{Notes[N + 14].note}</button> },
        { id: 16, note: Notes[N + 16].note, button: <button id="9" onClick={() => playKey(4 * 12 + (N + 16))}>{Notes[N + 16].note}</button> },
        { id: 17, note: Notes[N + 17].note, button: <button id="10" onClick={() => playKey(4 * 12 + (N + 17))}>{Notes[N + 17].note}</button> },
        { id: 19, note: Notes[N + 19].note, button: <button id="11" onClick={() => playKey(4 * 12 + (N + 19))}>{Notes[N + 19].note}</button> },
        { id: 21, note: Notes[N + 21].note, button: <button id="12" onClick={() => playKey(4 * 12 + (N + 21))}>{Notes[N + 21].note}</button> },
        { id: 23, note: Notes[N + 23].note, button: <button id="13" onClick={() => playKey(4 * 12 + (N + 23))}>{Notes[N + 23].note}</button> },
        { id: 24, note: Notes[N + 24].note, button: <button id="14" onClick={() => playKey(4 * 12 + (N + 24))}>{Notes[N + 24].note}</button> },
        { id: 26, note: Notes[N + 26].note, button: <button id="15" onClick={() => playKey(4 * 12 + (N + 26))}>{Notes[N + 26].note}</button> },
        { id: 28, note: Notes[N + 28].note, button: <button id="16" onClick={() => playKey(4 * 12 + (N + 28))}>{Notes[N + 28].note}</button> },
        { id: 29, note: Notes[N + 29].note, button: <button id="17" onClick={() => playKey(4 * 12 + (N + 29))}>{Notes[N + 29].note}</button> },
        { id: 31, note: Notes[N + 31].note, button: <button id="18" onClick={() => playKey(4 * 12 + (N + 31))}>{Notes[N + 31].note}</button> },
        { id: 33, note: Notes[N + 33].note, button: <button id="19" onClick={() => playKey(4 * 12 + (N + 33))}>{Notes[N + 33].note}</button> },
        { id: 35, note: Notes[N + 35].note, button: <button id="20" onClick={() => playKey(4 * 12 + (N + 35))}>{Notes[N + 35].note}</button> },

    ]

    const [n1, setN1] = useState(7)
    const [n2, setN2] = useState(7)
    const [n3, setN3] = useState(7)
    const [n4, setN4] = useState(7)
    const [n5, setN5] = useState(7)




    return (<>


        <div className="result">

            {props.Scale === "JÔNICO" ? <>

                <div className="resultNotes">


                    <div>{bT} <h3>T</h3></div>
                    <div>{b3} <h3>2ª</h3></div>
                    <div>{b5} <h3>3ª</h3></div>
                    <div>{b6} <h3>4ª</h3></div>
                    <div>{b8} <h3>5ª</h3></div>
                    <div>{b10} <h3>6ª</h3></div>
                    <div>{b12} <h3>7ª</h3></div>
                    <div>{b13} <h3>8ª</h3></div>

                </div>

            </>
                : <></>
            }

        </div>

        <hr /><br />
        <div className="resultVoices">
            
        
            <div>
                <button className="subB" onClick={() => setN1(n1 + 1)}>#</button>
                {Notas[n1].button}
                <button className="subB" onClick={() => setN1(n1 - 1)}>b</button>
            </div>

            <div>
                <button className="subB" onClick={() => setN2(n2 + 1)}>#</button>
                {Notas[n2].button}
                <button className="subB" onClick={() => setN2(n2 - 1)}>b</button>
            </div>

            <div>
                <button className="subB" onClick={() => setN3(n3 + 1)}>#</button>
                {Notas[n3].button}
                <button className="subB" onClick={() => setN3(n3 - 1)}>b</button>
            </div>

            <div>
                <button className="subB" onClick={() => setN4(n4 + 1)}>#</button>
                {Notas[n4].button}
                <button className="subB" onClick={() => setN4(n4 - 1)}>b</button>
            </div>

            <div>
                <button className="subB" onClick={() => setN5(n5 + 1)}>#</button>
                {Notas[n5].button}
                <button className="subB" onClick={() => setN5(n5 - 1)}>b</button>
            </div>

        </div>
        {/* ----------------------------------------------------------------- */}
        <hr /><br />
        
        {props.Tonica === Notas[n1].note &&
            <>{/* Quando a primeira é a tonica  */}
            
                <div className="resultVoices" id="1">
                Terça 
                    <div>
                        {Notas[n1 + 2].button}
                    </div>

                    <div>
                        {Notas[n2 + 2].button}
                    </div>

                    <div>
                        {Notas[n3 + 2].button}
                    </div>

                    <div>
                        {Notas[n4 + 2].button}
                    </div>

                    <div>
                        {Notas[n5 + 2].button}
                    </div>

                </div>
                <div className="resultVoices" id="2">
                Quinta
                    <div>
                        {Notas[n1 + 4].button}
                    </div>

                    <div>
                        {Notas[n2 + 4].button}
                    </div>

                    <div>
                        {Notas[n3 + 4].button}
                    </div>

                    <div>
                        {Notas[n4 + 4].button}
                    </div>

                    <div>
                        {Notas[n5 + 4].button}
                    </div>

                </div>

                <div className="resultVoices" id="2">
                Dueto T e 3
                    <div>
                        <button onClick={()=>playKey(4 * 12 + Notas[n1].id) & playKey(4 * 12 + Notas[n1 + 2].id)}>T3</button>
                    </div>

                    <div>
                    <button onClick={()=>playKey(4 * 12 + Notas[n2].id) & playKey(4 * 12 + (Notas[n2 + 2].id))}>T3</button>
                    </div>

                    <div>
                    <button onClick={()=>playKey(4 * 12 + Notas[n3].id) & playKey(4 * 12 + (Notas[n3 + 2].id))}>T3</button>
                    </div>

                    <div>
                    <button onClick={()=>playKey(4 * 12 + Notas[n4].id) & playKey(4 * 12 + (Notas[n4 + 2].id))}>T3</button>
                    </div>

                    <div>
                    <button onClick={()=>playKey(4 * 12 + Notas[n5].id) & playKey(4 * 12 + (Notas[n5 + 2].id))}>T3</button>
                    </div>

                </div>

                <div className="resultVoices" id="2">
                Dueto T e 5
                    <div>
                        <button onClick={()=>playKey(4 * 12 + Notas[n1].id) & playKey(4 * 12 + Notas[n1 + 4].id)}>T5</button>
                    </div>

                    <div>
                    <button onClick={()=>playKey(4 * 12 + Notas[n2].id) & playKey(4 * 12 + (Notas[n2 + 4].id))}>T5</button>
                    </div>

                    <div>
                    <button onClick={()=>playKey(4 * 12 + Notas[n3].id) & playKey(4 * 12 + (Notas[n3 + 4].id))}>T5</button>
                    </div>

                    <div>
                    <button onClick={()=>playKey(4 * 12 + Notas[n4].id) & playKey(4 * 12 + (Notas[n4 + 4].id))}>T5</button>
                    </div>

                    <div>
                    <button onClick={()=>playKey(4 * 12 + Notas[n5].id) & playKey(4 * 12 + (Notas[n5 + 4].id))}>T5</button>
                    </div>

                </div>

                <div className="resultVoices" id="2">
                Acordes
                    <div>
                        <button onClick={()=>playKey(4 * 12 + Notas[n1].id) & playKey(4 * 12 + Notas[n1 + 2].id) & playKey(4 * 12 + Notas[n1 + 4].id)}>T35</button>
                    </div>

                    <div>
                    <button onClick={()=>playKey(4 * 12 + Notas[n2].id) & playKey(4 * 12 + Notas[n2 + 2].id) & playKey(4 * 12 + (Notas[n2 + 4].id))}>T35</button>
                    </div>

                    <div>
                    <button onClick={()=>playKey(4 * 12 + Notas[n3].id) & playKey(4 * 12 + Notas[n3 + 2].id) & playKey(4 * 12 + (Notas[n3 + 4].id))}>T35</button>
                    </div>

                    <div>
                    <button onClick={()=>playKey(4 * 12 + Notas[n4].id) & playKey(4 * 12 + Notas[n4 + 2].id) & playKey(4 * 12 + (Notas[n4 + 4].id))}>T35</button>
                    </div>

                    <div>
                    <button onClick={()=>playKey(4 * 12 + Notas[n5].id) & playKey(4 * 12 + Notas[n5 + 2].id) & playKey(4 * 12 + (Notas[n5 + 4].id))}>T35</button>
                    </div>

                </div>


            </>
        }

        {Notas[2].note === Notas[n1].note &&
            <>{/* Quando a primeira é a terça */}
                <div className="resultVoices" id="1">
                    Tonica
                    <div>
                        {Notas[n1 - 2].button}
                    </div>

                    <div>
                        {Notas[n2 - 2].button}
                    </div>

                    <div>
                        {Notas[n3 - 2].button}
                    </div>

                    <div>
                        {Notas[n4 - 2].button}
                    </div>

                    <div>
                        {Notas[n5 - 2].button}
                    </div>

                </div>

                <div className="resultVoices" id="2">
                    Quinta
                    <div>
                        {Notas[n1 + 2].button}
                    </div>

                    <div>
                        {Notas[n2 + 2].button}
                    </div>

                    <div>
                        {Notas[n3 + 2].button}
                    </div>

                    <div>
                        {Notas[n4 + 2].button}
                    </div>

                    <div>
                        {Notas[n5 + 2].button}
                    </div>

                </div>

                <div className="resultVoices" id="2">
                Dueto 3 e T
                    <div>
                        <button onClick={()=>playKey(4 * 12 + Notas[n1].id) & playKey(4 * 12 + Notas[n1 - 2].id)}>3T</button>
                    </div>

                    <div>
                    <button onClick={()=>playKey(4 * 12 + Notas[n2].id) & playKey(4 * 12 + (Notas[n2 - 2].id))}>3T</button>
                    </div>

                    <div>
                    <button onClick={()=>playKey(4 * 12 + Notas[n3].id) & playKey(4 * 12 + (Notas[n3 - 2].id))}>3T</button>
                    </div>

                    <div>
                    <button onClick={()=>playKey(4 * 12 + Notas[n4].id) & playKey(4 * 12 + (Notas[n4 - 2].id))}>3T</button>
                    </div>

                    <div>
                    <button onClick={()=>playKey(4 * 12 + Notas[n5].id) & playKey(4 * 12 + (Notas[n5 - 2].id))}>3T</button>
                    </div>

                </div>

                <div className="resultVoices" id="2">
                Dueto 3 e 5
                    <div>
                        <button onClick={()=>playKey(4 * 12 + Notas[n1].id) & playKey(4 * 12 + Notas[n1 + 2].id)}>35</button>
                    </div>

                    <div>
                    <button onClick={()=>playKey(4 * 12 + Notas[n2].id) & playKey(4 * 12 + (Notas[n2 + 2].id))}>35</button>
                    </div>

                    <div>
                    <button onClick={()=>playKey(4 * 12 + Notas[n3].id) & playKey(4 * 12 + (Notas[n3 + 2].id))}>35</button>
                    </div>

                    <div>
                    <button onClick={()=>playKey(4 * 12 + Notas[n4].id) & playKey(4 * 12 + (Notas[n4 + 2].id))}>35</button>
                    </div>

                    <div>
                    <button onClick={()=>playKey(4 * 12 + Notas[n5].id) & playKey(4 * 12 + (Notas[n5 + 2].id))}>35</button>
                    </div>

                </div>

                <div className="resultVoices" id="2">
                Acordes
                    <div>
                        <button onClick={()=>playKey(4 * 12 + Notas[n1].id) & playKey(4 * 12 + Notas[n1 + 2].id) & playKey(4 * 12 + Notas[n1 - 2].id)}>T35</button>
                    </div>

                    <div>
                    <button onClick={()=>playKey(4 * 12 + Notas[n2].id) & playKey(4 * 12 + Notas[n2 + 2].id) & playKey(4 * 12 + (Notas[n2 - 2].id))}>T35</button>
                    </div>

                    <div>
                    <button onClick={()=>playKey(4 * 12 + Notas[n3].id) & playKey(4 * 12 + Notas[n3 + 2].id) & playKey(4 * 12 + (Notas[n3 - 2].id))}>T35</button>
                    </div>

                    <div>
                    <button onClick={()=>playKey(4 * 12 + Notas[n4].id) & playKey(4 * 12 + Notas[n4 + 2].id) & playKey(4 * 12 + (Notas[n4 - 2].id))}>T35</button>
                    </div>

                    <div>
                    <button onClick={()=>playKey(4 * 12 + Notas[n5].id) & playKey(4 * 12 + Notas[n5 + 2].id) & playKey(4 * 12 + (Notas[n5 - 2].id))}>T35</button>
                    </div>

                </div>

            </>
        }

        {Notas[4].note === Notas[n1].note &&
            <>
                <div className="resultVoices" id="1">
                    Tonica
                    <div>
                        {Notas[n1 - 4].button}
                    </div>

                    <div>
                        {Notas[n2 - 4].button}
                    </div>

                    <div>
                        {Notas[n3 - 4].button}
                    </div>

                    <div>
                        {Notas[n4 - 4].button}
                    </div>

                    <div>
                        {Notas[n5 - 4].button}
                    </div>

                </div>

                <div className="resultVoices" id="2">
                    Terça
                    <div>
                        {Notas[n1 - 2].button}
                    </div>

                    <div>
                        {Notas[n2 - 2].button}
                    </div>

                    <div>
                        {Notas[n3 - 2].button}
                    </div>

                    <div>
                        {Notas[n4 - 2].button}
                    </div>

                    <div>
                        {Notas[n5 - 2].button}
                    </div>

                </div>

            </>
        }

    </>
    )

}
