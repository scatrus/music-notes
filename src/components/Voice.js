import React, { useState } from 'react'
import Notes from '../data/notes'
import Button from './Button';

export default props => {

    /* eslint-disable */

    const result = Notes.find(n1 => n1.note === props.Tonica);
    const N = result.id

    const bT = <Button N={N} Note={props.Tonica} />
    const b3 = <Button N={N + 2} Note={Notes[N + 2].note} />
    const b5 = <Button N={N + 4} Note={Notes[N + 4].note} />
    const b6 = <Button N={N + 5} Note={Notes[N + 5].note} />
    const b8 = <Button N={N + 7} Note={Notes[N + 7].note} />
    const b10 = <Button N={N + 9} Note={Notes[N + 9].note} />
    const b12 = <Button N={N + 11} Note={Notes[N + 11].note} />
    const b13 = <Button N={N + 12} Note={Notes[N + 12].note} />

    const Notas = [
        { id: 0, note: props.Tonica, button: <Button N={N} Note={props.Tonica} /> },
        { id: 2, note: Notes[N + 2].note, button: <Button N={N + 2} Note={Notes[N + 2].note} /> },
        { id: 4, note: Notes[N + 4].note, button: <Button N={N + 4} Note={Notes[N + 4].note} /> },
        { id: 5, note: Notes[N + 5].note, button: <Button N={N + 5} Note={Notes[N + 5].note} /> },
        { id: 7, note: Notes[N + 7].note, button: <Button N={N + 7} Note={Notes[N + 7].note} /> },
        { id: 9, note: Notes[N + 9].note, button: <Button N={N + 9} Note={Notes[N + 9].note} /> },
        { id: 11, note: Notes[N + 11].note, button: <Button N={N + 11} Note={Notes[N + 11].note} /> },
        { id: 12, note: Notes[N + 12].note, button: <Button N={N + 12} Note={Notes[N + 12].note} /> },
        { id: 14, note: Notes[N + 14].note, button: <Button N={N + 14} Note={Notes[N + 14].note} /> },
        { id: 16, note: Notes[N + 16].note, button: <Button N={N + 16} Note={Notes[N + 16].note} /> },
        { id: 17, note: Notes[N + 17].note, button: <Button N={N + 17} Note={Notes[N + 17].note} /> },
        { id: 19, note: Notes[N + 19].note, button: <Button N={N + 19} Note={Notes[N + 19].note} /> },
        { id: 21, note: Notes[N + 21].note, button: <Button N={N + 21} Note={Notes[N + 21].note} /> },
        { id: 23, note: Notes[N + 23].note, button: <Button N={N + 23} Note={Notes[N + 23].note} /> },
        { id: 24, note: Notes[N + 24].note, button: <Button N={N + 24} Note={Notes[N + 24].note} /> },
        { id: 26, note: Notes[N + 26].note, button: <Button N={N + 26} Note={Notes[N + 26].note} /> },
        { id: 28, note: Notes[N + 28].note, button: <Button N={N + 28} Note={Notes[N + 28].note} /> },
        { id: 29, note: Notes[N + 29].note, button: <Button N={N + 29} Note={Notes[N + 29].note} /> },
        { id: 31, note: Notes[N + 31].note, button: <Button N={N + 31} Note={Notes[N + 31].note} /> },
        { id: 33, note: Notes[N + 33].note, button: <Button N={N + 33} Note={Notes[N + 33].note} /> },
        { id: 35, note: Notes[N + 35].note, button: <Button N={N + 35} Note={Notes[N + 35].note} /> },
    ]


    const [n1, setN1] = useState(7)
    const [n2, setN2] = useState(7)
    const [n3, setN3] = useState(7)
    const [n4, setN4] = useState(7)
    const [n5, setN5] = useState(7)
    const [n6, setN6] = useState(7)
    const [n7, setN7] = useState(7)
    const [n8, setN8] = useState(7)
    const [n9, setN9] = useState(7)
    const [n10, setN10] = useState(7)
    const [n11, setN11] = useState(7)
    const [n12, setN12] = useState(7)

    const ns = [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11, n12]

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
        <div className="resultVoices"><div className="voz">Melodia</div>

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

            <div>
                <button className="subB" onClick={() => setN6(n6 + 1)}>#</button>
                {Notas[n6].button}
                <button className="subB" onClick={() => setN6(n6 - 1)}>b</button>
            </div>

            <div>
                <button className="subB" onClick={() => setN7(n7 + 1)}>#</button>
                {Notas[n7].button}
                <button className="subB" onClick={() => setN7(n7 - 1)}>b</button>
            </div>

            <div>
                <button className="subB" onClick={() => setN8(n8 + 1)}>#</button>
                {Notas[n8].button}
                <button className="subB" onClick={() => setN8(n8 - 1)}>b</button>
            </div>

            <div>
                <button className="subB" onClick={() => setN9(n9 + 1)}>#</button>
                {Notas[n9].button}
                <button className="subB" onClick={() => setN9(n9 - 1)}>b</button>
            </div>

            <div>
                <button className="subB" onClick={() => setN10(n10 + 1)}>#</button>
                {Notas[n10].button}
                <button className="subB" onClick={() => setN10(n10 - 1)}>b</button>
            </div>

            <div>
                <button className="subB" onClick={() => setN11(n11 + 1)}>#</button>
                {Notas[n11].button}
                <button className="subB" onClick={() => setN11(n11 - 1)}>b</button>
            </div>

            <div>
                <button className="subB" onClick={() => setN12(n12 + 1)}>#</button>
                {Notas[n12].button}
                <button className="subB" onClick={() => setN12(n12 - 1)}>b</button>
            </div>

        </div>
        {/* ----------------------------------------------------------------- */}
        <hr /><br />

        {props.Tonica === Notas[n1].note &&
            <>{/* Quando a primeira é a tonica  */}
                <div className="resultVoices"><div className="voz">Terca</div>
                    {ns.map((element) =>
                        <div>{Notas[element + 2].button}</div>
                    )}
                </div>
                <div className="resultVoices"><div className="voz">Quinta</div>
                    {ns.map((element) =>
                        <div>{Notas[element + 4].button}</div>
                    )}

                </div>
                <div className="resultVoices"><div className="voz">T e 3</div>

                    {ns.map((element) =>
                        <div>
                            <button onClick={() =>
                                playKey(4 * 12 + Notas[element].id) &
                                playKey(4 * 12 + Notas[element + 2].id)}>T3</button>
                        </div>
                    )}
                </div>
                <div className="resultVoices"><div className="voz">T e 5</div>
                    {ns.map((element) =>
                        <div>
                            <button onClick={() =>
                                playKey(4 * 12 + Notas[element].id) &
                                playKey(4 * 12 + Notas[element + 4].id)}>T5</button>
                        </div>
                    )}
                </div>
                <div className="resultVoices"><div className="voz">Acordes</div>
                    {ns.map((element) =>

                        <div>
                            <button onClick={() =>
                                playKey(4 * 12 + Notas[element].id) &
                                playKey(4 * 12 + Notas[element + 2].id) &
                                playKey(4 * 12 + Notas[element + 4].id)}>T35</button>
                        </div>
                    )}
                </div>
            </>
        }

        {Notas[2].note === Notas[n1].note &&
            <>{/* Quando a primeira é a terça */}
                <div className="resultVoices"><div className="voz">Tonica</div>
                    {ns.map((element) =>
                        <div>{Notas[element - 2].button}</div>
                    )}
                </div>
                <div className="resultVoices"><div className="voz">Quinta</div>
                    {ns.map((element) =>
                        <div>{Notas[element + 2].button}</div>
                    )}
                </div>
                <div className="resultVoices"><div className="voz">3 e T</div>
                    {ns.map((element) =>
                        <div>
                            <button onClick={() =>
                                playKey(4 * 12 + Notas[element].id) &
                                playKey(4 * 12 + Notas[element - 2].id)}>3T</button>
                        </div>
                    )}
                </div>
                <div className="resultVoices"><div className="voz">3 e 5</div>
                    {ns.map((element) =>
                        <div>
                            <button onClick={() =>
                                playKey(4 * 12 + Notas[element].id) &
                                playKey(4 * 12 + Notas[element + 2].id)}>35</button>
                        </div>
                    )}
                </div>
                <div className="resultVoices"><div className="voz">Acordes</div>
                    {ns.map((element) =>
                        <div>
                            <button onClick={() =>
                                playKey(4 * 12 + Notas[element].id) &
                                playKey(4 * 12 + Notas[element + 2].id) &
                                playKey(4 * 12 + Notas[element - 2].id)}>T35</button>
                        </div>
                    )}
                </div>
            </>
        }

        {Notas[4].note === Notas[n1].note &&
            <>{/* Quando a primeira é a quinta */}
                <div className="resultVoices"><div className="voz">Tonica</div>

                    {ns.map((element) =>
                        <div>{Notas[element - 4].button}</div>
                    )}
                </div>
                <div className="resultVoices"><div className="voz">Terça</div>

                    {ns.map((element) =>
                        <div>{Notas[element - 2].button}</div>
                    )}
                </div>
                <div className="resultVoices"><div className="voz">5 e 3</div>
                    {ns.map((element) =>
                        <div>
                            <button onClick={() =>
                                playKey(4 * 12 + Notas[element].id) &
                                playKey(4 * 12 + Notas[element - 2].id)}>53</button>
                        </div>
                    )}

                </div>
                <div className="resultVoices"><div className="voz">5 e T</div>
                    {ns.map((element) =>
                        <div>
                            <button onClick={() =>
                                playKey(4 * 12 + Notas[element].id) &
                                playKey(4 * 12 + Notas[element - 4].id)}>5T</button>
                        </div>
                    )}

                </div>
                <div className="resultVoices"><div className="voz">Acordes</div>
                    {ns.map((element) =>
                        <div>
                            <button onClick={() =>
                                playKey(4 * 12 + Notas[element].id) &
                                playKey(4 * 12 + Notas[element - 2].id) &
                                playKey(4 * 12 + Notas[element - 4].id)}>T35</button>
                        </div>
                    )}
                </div>

            </>
        }
    </>
    )

}
