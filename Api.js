import React, { useEffect } from 'react'

const Api = () => {
    useEffect(() => {
        fetch("http://localhost:8001/users").then((result) => {
            return result.json()
        }).then((data) => {
            console.log(data);

        })
    }, [])

    return <></>
}

export default Api
