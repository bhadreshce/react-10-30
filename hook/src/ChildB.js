import React, { useContext } from 'react'
import { firsName, lasName } from './App'
const ChildB = () => {
    const fname = useContext(firsName)
    const lname = useContext(lasName)

    return (
        <div>
            <h1>{fname}</h1>
            <h1>{lname}</h1>
        </div>
    )
}

export default ChildB
