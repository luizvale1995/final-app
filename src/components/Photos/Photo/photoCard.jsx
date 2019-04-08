import React from 'react'
import './photoCard.css'

class PhotoCard extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {Votes: props.vote}
    }

    votePhoto() {
        this.setState({ Votes: this.state.Votes + 1 })
    }
    render() {
    return(
        <div onClick= {() => this.votePhoto()} className = "Photo">
            <img className = "imge"
            alt = {this.props.photo.description}
            src = {this.props.photo.urls.small} /> 
            <p className = "Votes" >Votes : {this.state.Votes}</p>
    </div>
         )
    }
}

export default PhotoCard