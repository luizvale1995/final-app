import React from 'react'
import Aux from '../../../roc/Aux'

const button = (props) => {
    return (
    <Aux>
        <button onClick={props.click}>Click Here to vote {props.age}</button>
    </Aux> )
}

export default button