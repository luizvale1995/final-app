import React from 'react'
import './Button.css'

const button = (props) => {
    return (
    <div>
        <button onClick={props.click} className = "styleButton">Click Here to vote</button>
    </div> )
}

export default button