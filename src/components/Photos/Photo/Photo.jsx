import React from 'react';
import Button from '../Button/Button'

import './Photo.css';

const photo = ( props ) => {
    return (
        <article className="Post">
            <h1>Imagem</h1>
            <div className="Info">
                <div className="Votes">Votes:{props.age} </div>
            </div>
            <Button click = {props.click} />
        </article>
    )
};

export default photo;


