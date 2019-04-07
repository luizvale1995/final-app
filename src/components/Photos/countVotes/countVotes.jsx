import React from 'react'

const countVotes = (props) => {
    var boxVotes = null;

    // countVotes renderiza uma imagem caso o voto tenha sido computado para a imagem
    switch(props.typeVote) {
        case (() => props.likedVoted()):
            boxVotes = <div className = "boxCount"> deu certo isso também ?</div>
            break;
        default:
            boxVotes = null;
    console.log(boxVotes)
    return boxVotes;
    }

}

export default countVotes