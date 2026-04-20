import React, { useState } from 'react'

const States = () => {
  const [num, setNum] = useState(0)

  function incriNum(){
    setNum(incri => incri + 1)
  }
  function decriNum(){
    setNum(decri => decri - 1)
  }

  return (
    <div>
      <h1>The Num is : {num}</h1>
      <button onClick={incriNum}>Increase</button>
      <button onClick={decriNum}>Decrease</button>
    </div>
  )
}

export default States