import React, { useState, useRef } from 'react'

const Todo = () => {
    const input = useRef()
    const [Todo, setTodo] = useState([])
    const addTask = async (data) => {

        await setTodo(prevArray => [...prevArray, input.current.value])
        input.current.value = ''
        console.log(Todo);

    }



    return <>
        <div className='text-center'>
            <input ref={input} type="text" /><button onClick={() => {
                addTask(Todo)
            }}>Add</button>

        </div>
        <div className='text-center'>
            {Todo.map((data) => {
                return (
                    <h1>{data}</h1>
                )
            })}
        </div>



    </>
}

export default Todo
