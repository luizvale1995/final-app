import React, { Component } from 'react';
// import CountVotes from './countVotes/countVotes'
import Photo from './Photo/Photo'

// Photos gerência o estado das imagens e também controla seu número de votos

class Photos extends Component {
    state = {
      photos: [
        { id: 'asfa1', name: 'Max', age: 28 },
        { id: 'vasdf1', name: 'Manu', age: 29 },
        { id: 'asdf11', name: 'Stephanie', age: 26 }
      ],
      otherState: 'some other value',
      showphotos: true
    }
  
    nameChangedHandler = ( event, id ) => {
      const photoIndex = this.state.photos.findIndex(p => {
        return p.id === id;
      });
  
      const photo = {
        ...this.state.photos[photoIndex]
      };
  
      // const photo = Object.assign({}, this.state.photos[photoIndex]);
  
      photo.name = event.target.value;
  
      const photos = [...this.state.photos];
      photos[photoIndex] = photo;
  
      this.setState( {photos: photos} );
    }
  
    voteCounter = (photoIndex) => {
      // const photos = this.state.photos.slice();
      const photos = [...this.state.photos];
      photos[photoIndex].age ++
      this.setState({photos: photos});
    }
  
    togglephotosHandler = () => {
      const doesShow = this.state.showphotos;
      this.setState( { showphotos: !doesShow } );
    }
  
    render () {
      const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      };
  
      let photos = null;
  
      if ( this.state.showphotos ) {
        photos = (
          <div>
            {this.state.photos.map((photo, index) => {
              return <Photo
                click={() => this.voteCounter(index)}
                name={photo.name} 
                age={photo.age}
                key={photo.id}
                changed={(event) => this.nameChangedHandler(event, photo.id)} />
            })}
          </div>
        );
      }
  
      return (
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          {photos}
        </div>
      );
      // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
  }
  
  export default Photos;
  