
import React, { Component } from 'react';

import ImagesAPI from '../../API/imagesAPI'
import Search from '../../components/Search/Search'
import Photos from '../../components/Photos/Photos'
import './photosBuilder.css'

// Photos Controls envia a imagem para a ába de fotos curtidas
// Photos Grid estrutura e organiza as imagens

class PhotosBuilder extends Component {

    state = {photos: [] }

    async onSearchSubmit(term) {
        const response = await ImagesAPI.get('/search/photos', {
            params: {query: term}
        });
        this.setState({photos: response.data.results})

    }



    render () {
        return (
            <div className="ui container" style={{ marginTop: '10px' }} >
                <Search onSubmit = {(term) => this.onSearchSubmit(term)}/>
                Found: {this.state.photos.length} photos !
                <Photos photos = {this.state.photos} />
            </div>
        );
    }
}

export default PhotosBuilder;