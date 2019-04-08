import React, { Component } from 'react';
import './App.css';
import PhotosBuilder from './containers/photosBuilder/photosBuilder'

class App extends Component {
  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }} >
          <PhotosBuilder />
      </div>
    );
  }
}

export default App;
