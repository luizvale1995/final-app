
import React, { Component } from 'react';

import ImagesAPI from '../../API/imagesAPI'
import Search from '../../components/Search/Search'
import Photos from '../../components/Photos/Photos'
import './photosBuilder.css'


class PhotosBuilder extends Component {

    state = {photos: [] }

    async onSearchSubmit(term) {
        const response = await ImagesAPI.get('/search/photos', {
            params: {query: term}
        });
        this.setState({photos: response.data.results})

    }

    async onLikeSubmit(term) {
        const response = await ImagesAPI.post('/photos/:id/like', {
            params: {query: term}
        });
        console.log(response)

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