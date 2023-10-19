import React from 'react'
import Test from './Test'
const Demo = () => {
  const changesearch = (data) => {
    console.log(data);

    document.getElementById('p').innerText = data
  }
  return (
    <div>
      <Test searchdata={changesearch} />
      <p id='p'></p>
    </div>
  )
}

export default Demo
