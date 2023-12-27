import React, { useState } from 'react'

function Validate() {
    const [inputField, setInput] = useState({
        name: ''
    })

    const [errors, setErrors] = useState({

    })

    const changeValue = (e) => {
        setInput({ name: e.target.value })
        console.log(inputField);

    }

    const validate = (value) => {
        let errs = {}
        if (value.name == '' || !value.name.includes("@")) {
            errs.name = 'please insert valid usename'
        }

        return errs
    }

    const handlleSubmit = (e) => {
        e.preventDefault();

        setErrors(validate(inputField))
    }

    return (
        <>
            <form action="" onSubmit={handlleSubmit}>
                <input type="text" name='name' onChange={changeValue} />
                {errors.name ? (
                    <p style={{ color: "red" }}>{errors.name}</p>
                ) : null}
                <input type="submit" value="submit" />
            </form>
        </>
    )
}

export default Validate
