import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import { addUser } from './slice/useSlice'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const [todo, setTodo] = useState([])
  const dispatch = useDispatch()

  const data = useSelector((result) => {
    console.log(result.getUser);
    // setTodo(result.getUser)
    return result.getUser
  })
  const addTodo = () => {
    dispatch(addUser(document.getElementById('input').value))
  }
  return (
    <div className="App">
      <input type="text" id='input' />
      <button onClick={() => {
        addTodo()
      }}>Add</button>
      {data.map((result) => {
        return (
          <p>{result}</p>
        )
      })}
    </div>
  );
}

export default App;
