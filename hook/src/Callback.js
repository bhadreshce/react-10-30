import React, { memo } from 'react'

const Callback = ({ todo, addtodo }) => {
    console.log('todo called');

    return <>
        {todo.map((data) => {
            return (
                <p>{data}</p>
            )
        })}
        <button onClick={() => {
            addtodo()
        }}>
            Add Data
        </button>
    </>
}

export default memo(Callback)
