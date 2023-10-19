import React, { useRef } from 'react'

const Test = (props) => {
    const input = useRef("")
    return <>
        <input type="text" ref={input} onChange={(event) => {
            props.searchdata(input.current.value)
        }} />
    </>
}

export default Test
