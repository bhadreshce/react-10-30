import './App.css'
import React, { createContext, useState } from 'react'
import ChilA from './ChilA'
const firsName = createContext('')
const lasName = createContext('')

function App() {
  const [first, setfirst] = useState(0)
  return <div className="App">
    <firsName.Provider value={first}>
      <lasName.Provider value={'bhadresh'}>
        <ChilA />
      </lasName.Provider>
    </firsName.Provider>

  </div>
}

export default App
export { firsName, lasName }