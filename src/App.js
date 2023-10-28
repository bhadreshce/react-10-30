import React, { useState, useEffect, useRef } from 'react'
import Test from './Test'
import Demo from './Demo'
import List from './List'
import Api from './Api'
import Todo from './Todo'


export default function App() {
  const input = useRef('')
  const inputfocus = () => {
    input.current.value = 1000
    input.current.style.backgroundColor = 'green'
  }
  return (
    <div>
      {/* <Demo ref={input} />
      <button onClick={() => {
        inputfocus()
      }}>Add data</button> */}

      <Todo />

    </div>
  )
}
