import React from 'react'
import RightMain from './RightMain'
import MainContent from './MainContent'

const Main = () => {
  return (
    <div style={{height:"500px",backgroundColor:"red",display:'flex'}}>
        <MainContent/>
        <RightMain/>
    </div>
  )
}

export default Main