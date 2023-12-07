import React, { useState, useMemo } from 'react'

const Memo = () => {
    const [count, setCount] = useState(0)
    const [sum, setSum] = useState(0)
    const increement = () => {
        setCount(count + 1)

    }
    // const printhii = () => {
    //     console.log('hii');

    // }

    const printhii = useMemo(() => {
           document.body.style.backgroundColor = 'red'

        return 'hii'
    }, [])
    return <>
        <h1>{count}</h1>
        {printhii}
        <button onClick={() => {
            increement()
        }}>count</button>
    </>
}

export default Memo
