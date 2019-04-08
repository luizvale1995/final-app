import React from 'react';
// import CountVotes from './countVotes/countVotes'
import PhotoCard from './Photo/photoCard'
import './Photos.css'

// Photos gerência o estado das imagens e também controla seu número de votos

const Photos = props => {
  var photos = props.photos.map((photo) => {
    return <PhotoCard key = {photo.id} photo = {photo} vote = {0} />
 
  });

  return <div className = "Photos">{photos} </div>
};
  
  export default Photos;
  