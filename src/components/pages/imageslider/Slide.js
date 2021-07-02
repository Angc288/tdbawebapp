import React from 'react'
import { Link as ScrollLink } from 'react-scroll';

function Slide({ content }) {

  const offset = -140
  const minDuration = 500

  return <div style={{
    position: 'relative',
    textAlign: 'center',
    color: 'white'
  }}>
    <img src={content.image} />
    <div style={{
      position: 'absolute',
      top: '50%',
      bottom: '50%',
      transform: 'translate(50%,-50%)'
    }}>
      <ScrollLink to={content.link} smooth={true} spy={true} duration={minDuration} offset={offset} activeClass="active">{content.text}</ScrollLink>
    </div>
  </div>


}

export default Slide