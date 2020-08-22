import React from 'react'
import Button from './Button'

export default props => {

    /* eslint-disable */

    const E1 = <Button N = {28-12} Note = "E" />
    const D1 = <Button N = {26-12} Note = "D" />
    const B = <Button N = {23-12} Note = "B" />
    const A1 = <Button N = {21-12} Note = "A" />
    const G = <Button N = {19-12} Note = "G" />
    const Fsust = <Button N = {18-12} Note = "F#" />
    const D = <Button N = {14-12} Note = "D" />
    const A = <Button N = {9-12} Note = "A" />
    const E2 = <Button N = {4-12} Note = "E" />
    const D2 = <Button N = {2-12} Note = "D" />


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
                    <div>{Fsust}<h3>3ª</h3></div>
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
