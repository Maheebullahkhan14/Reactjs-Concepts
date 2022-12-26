import React, { useMemo, useState } from 'react'

const Usememo = () => {
    const [add ,setAdd] = useState(0)
    const [subtract ,setSubtract] = useState(100)

const Multipliaction =useMemo (function multiply(){
        console.log('********')
        return add*10
    },[add])


  return (
    <div>
      <>
        <h1>learning Usememo Hook</h1>
        <span>{Multipliaction}</span>
        <br></br>
        <button onClick={() => setAdd(add + 1)}>Addition</button>
        <span>{add}</span>
        <br></br>
        <button onClick={() => setSubtract(subtract - 1)}>Subtract</button>
        <span>{subtract}</span>
      </>
    </div>
  )
}

export default Usememo;
