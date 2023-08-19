import React, { useState } from 'react'

const Counter = () => {
    const [setCount,Count] = useState(0)
  return (
    <div>
      <h1>{setCount}</h1>
      <button onClick={()=>Count(setCount+1)}>Increment</button>
    </div>
  )
}

export default Counter;
