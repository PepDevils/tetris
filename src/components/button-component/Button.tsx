import React from 'react'
import './Button.scss'

type IButtonProps = any;

const Button = ({text, callback}:IButtonProps) => (
    <div className="my-button" onClick={callback}>
        {
            text ? text : 'Start Game'
        }
    </div>
)

export {Button}