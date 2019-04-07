import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout'
import PhotosBuilder from './containers/photosBuilder/photosBuilder'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <PhotosBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
