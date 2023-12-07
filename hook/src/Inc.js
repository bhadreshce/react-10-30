import React, { useState, useCallback } from 'react'
import Callback from './Callback'

const Inc = () => {
    const [count, setCount] = useState(0)
    const [todo, setTodo] = useState([])

    const increement = () => {
        setCount(count + 1)
    }
    const AddTodo = useCallback(() => {
        setTodo(prevArray => [...prevArray, 'add new data'])
    }, [todo])
    // const AddTodo = () => {
    //     setTodo(prevArray => [...prevArray, 'add new data'])
    // }
    return <>
        <p>{count}</p>
        <button onClick={
            increement
        }>increement</button>
        <Callback todo={todo} addtodo={AddTodo} />
    </>
}

export default Inc
