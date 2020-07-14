// Code Keypad Component Here
import React from 'react'

const Keypad = () => {
  
  const hadleKeyUP = (e) => {
    // e.key
    console.log('Entering password...')
  }

  return (
    <input type="password" onKeyUp={hadleKeyUP}/>
  )
}

export default Keypad