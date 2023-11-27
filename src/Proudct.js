import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'

const Proudct = () => {
    const { prdId } = useParams()
    useEffect(() => {
        axios.get(`http://localhost:8001/users/${prdId}`).then((prd) => {
            console.log(prd.data);
        })
    }, [])


    return <div>
        <h1>hiii product here {prdId}</h1>
    </div>
}

export default Proudct
