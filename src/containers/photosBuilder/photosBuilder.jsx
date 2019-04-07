import React, { Component } from 'react';
import Aux from '../../roc/Aux'
import Photos from '../../components/Photos/Photos'

// Photos Controls envia a imagem para a ába de fotos curtidas
// Photos Grid estrutura e organiza as imagens

class PhotosBuilder extends Component {
    render () {
        return (
            <Aux> 
                <section className="Posts">
                    <Photos />
                </section>
            </Aux>
        );
    }
}

export default PhotosBuilder;