import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";



const Json = () => {
    const [mydata, setmyData] = useState([])
    const [editId, seteditId] = useState(null)
    const input = useRef('')
    useEffect(() => {
        getdata()
    }, [])

    const deleteData = (i) => {
        axios.delete(`http://localhost:8001/users/${i}`).then(result => {
            console.log(result);
            getdata()

        })
        console.log(i);

    }




    const getdata = () => {
        axios.get("http://localhost:8001/users").then((data) => {
            setmyData(data.data)
            console.log(data.data);

        })
    }

    const insertData = () => {

        if (editId == null) {
            axios.post("http://localhost:8001/users", { name: input.current.value }).then(() => {
                getdata()
                input.current.value = ''
            })
        } else {
            axios.put(`http://localhost:8001/users/${editId}`, {
                name: input.current.value
            }).then(() => {

                getdata()
                input.current.value = ''
                seteditId(null)
            })
        }

    }
    const updateData = (id) => {
        let editData = mydata.filter((d) => {
            return d.id == id
        })

        input.current.value = editData[0].name;
        seteditId(editData[0].id)

    }


    return <>
        <input type="text" ref={input} />
        <button onClick={() => {
            insertData()
        }}>Insert</button>
        {mydata.map((data, i) => {
            return (<> <div style={{ backgroundColor: "pink", border: "2px solid black" }}> <h1>{data.name}</h1>
                <p>{data.age}</p>
                <button onClick={() => {
                    deleteData(data.id)
                }}>delete</button>
                <button onClick={() => {
                    updateData(data.id)
                }}>update</button>
                <Link to={`/product/${data.id}`}> <button>View Product</button></Link>
            </div></>

            )
        })}
    </>
}

export default Json
