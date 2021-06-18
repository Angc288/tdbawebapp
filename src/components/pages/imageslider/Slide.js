import React from 'react'

function Slide({content}) {
  
  return <div style={{
    position:'relative',
    textAlign:'center',
    color:'white'
  }}>
    <img src={content.image} />
    <div style={{
      position:'absolute',
      top:'50%',
      bottom:'50%',
      transform:'translate(50%,-50%)'

    }}><span style={{fontSize:'50px'}}>{content.text}</span></div>
    </div>
  
  
}

export default Slide