import React, { useState } from 'react'

const List = () => {
    const [std, setStd] = useState([
        { name: 'sidharth', marks: 60, age: 20 },
        { name: 'piyush', marks: 70, age: 21 },
        { name: 'sidharth', marks: 80, age: 23 },
    ])

    const addmarks = (data) => {
        var newArray = data.map((result) => {
            return { name: result.name, marks: result.marks + 10, age: result.age }
        })

        setStd(newArray)
    }
    return <>
        <table>
            <tr>
                <th>Name</th>
                <th>Marks</th>
                <th>Age</th>
            </tr>
            {std.map((result) => {
                return (
                    <tr>
                        <td>{result.name}</td>
                        <td>{result.marks}</td>
                        <td>{result.age}</td>
                    </tr>

                )
            })}
        </table>

        <button onClick={() => {
            addmarks(std)
        }}>Add 10 mark</button>

    </>
}

export default List
