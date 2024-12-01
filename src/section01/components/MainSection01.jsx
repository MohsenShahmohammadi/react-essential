import React from 'react'
import RightMainSection01 from './RightMainSection01'
import ContentSection01 from './ContentSection01'

const MainSection01 = () => {
  return (
    <div style={{height:"500px",backgroundColor:"red",display:'flex'}}>
        <ContentSection01/>
        <RightMainSection01/>
    </div>
  )
}

export default MainSection01