import React, { forwardRef } from 'react'
import Test from './Test'
const Demo = (props, refrewnce) => {

  return (
    <div>
      <input type="text" ref={refrewnce} />
    </div>
  )
}

export default forwardRef(Demo)
