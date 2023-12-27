import './App.css'
import React, { createContext, useState } from 'react'
import ChilA from './ChilA'
import Memo from './Memo'
import Inc from './Inc'
import Validate from './Validate'
const firsName = createContext('')
const lasName = createContext('')

function App() {
  const [first, setfirst] = useState(0)
  return <div className="App">
    {/* <firsName.Provider value={first}>
      <lasName.Provider value={'bhadresh'}>
        <ChilA />
      </lasName.Provider>
    </firsName.Provider> */}
    {/* <Inc /> */}
    <Validate />
  </div>
}

export default App
export { firsName, lasName }