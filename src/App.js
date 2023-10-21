import React, { useState, useEffect, useRef } from 'react'
import Test from './Test'
import Demo from './Demo'
import List from './List'


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

      <List />

    </div>
  )
}
