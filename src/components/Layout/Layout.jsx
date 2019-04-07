import React from 'react'
import Aux from '../../roc/Aux'
import './Layout.css'

const layout = (props) => (
    <Aux>
    <div>Header and logo </div>
    <hr/>
    <main className= 'Content'>
        {props.children}
    </main>
    </Aux>
)

export default layout;