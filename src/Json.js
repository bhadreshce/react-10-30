import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";



const Json = () => {
    const [mydata, setmyData] = useState([])

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

    return <>
        {mydata.map((data, i) => {
            return (<> <div style={{ backgroundColor: "pink", border: "2px solid black" }}> <h1>{data.name}</h1>
                <p>{data.age}</p>
                <button onClick={() => {
                    deleteData(data.id)
                }}>delete</button>

                <Link to={`/product/${data.id}`}> <button>View Product</button></Link>
            </div></>

            )
        })}
    </>
}

export default Json
