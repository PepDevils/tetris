import React from 'react'
import './Display.scss'

type IDisplayProps = any;

const Display = ({gameOver, text}: IDisplayProps): JSX.Element => 
 <div 
  className="display"
  style={{
      color: gameOver ? 'red' : '#999'
  }}
 > {
    text
   }
 </div>;

export {Display};