import React, { useEffect } from 'react'

const Sample01 = () => {
    // useEffect(()=>{
    //     console.log('My First Sample of useEffect')
    // })
    useEffect(()=>{
        console.log('My First Sample of useEffect')
    },[])
  return (
    <div>
        <h1>Hi Developer</h1>
        <p>Sample 01: What's UseEffect..</p>
    </div>
  )
}

export default Sample01