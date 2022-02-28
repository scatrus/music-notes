import React from 'react'


export default (props) =>
    /* eslint-disable */
    <button onClick={() => playKey(4 * 12 + (props.N)) } > { props.Note }</button >
