import React, { useState, useRef } from 'react'

const Todo = () => {
    const input = useRef()
    const editInput = useRef('')
    const [Todo, setTodo] = useState([])
    const [index, setIndex] = useState(null)

    const addTask = async (data) => {

        if (index == null) {
            if (input.current.value == "") {
                alert("please enere data")
            } else {
                await setTodo(prevArray => [...prevArray, input.current.value])
                input.current.value = ''
                console.log(Todo);
            }
        } else {
            updateData()
        }




    }

    const deleteItem = (i) => {
        const newItems = [...Todo];

        // newItems.splice(i, 1);
        var data = newItems.filter((data, index) => {
            return index != i
        })
        setTodo(data)
        console.log(newItems);

    }

    const getEditdata = (data, i) => {
        input.current.value = data
        setIndex(i)
    }

    const updateData = () => {
        const tododata = [...Todo];
        var udata = tododata.map((data, i) => {
            if (index == i) {
                return input.current.value
            } else {
                return data
            }
        })
        setTodo(udata)
        setIndex(null)
        input.current.value = ''
    }


    return <>
        <div className='text-center'>
            <input ref={input} type="text" /><button onClick={() => {
                addTask(Todo)
            }}>Add</button>

        </div>
        <div className='text-center'>
            {Todo.map((data, i) => {
                return (
                    <h1>{data} <button onClick={() => {
                        deleteItem(i)
                    }}>Delete</button>
                        <button type="button" onClick={() => {
                            getEditdata(data, i)
                        }} >
                            edit data
                        </button>
                    </h1>
                )
            })}


        </div>

        {/* <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <input type="text" ref={editInput} className="form-control" id="edit" />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={() => {
                            updateData()
                        }} data-dismiss="modal">Update</button>
                    </div>
                </div>
            </div>
        </div> */}

    </>
}

export default Todo
