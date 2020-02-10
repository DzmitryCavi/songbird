import React from 'react'
import birdsData from '../../data/birds'
import AudioPlayer from "react-h5-audio-player";
import './card.sass'

const Card = (props) => {
    const {id, page, isSelected} = props;
    const currentBirdData = birdsData[page].data[id];
    return ( 
    <div className = 'card'>
        { isSelected ?  <div className = 'card-information'>
            <img src={currentBirdData.image} alt="bird"/>
            <div className = 'bird-name-ru'>{currentBirdData.name}</div>
            <div className = 'bird-name-en'>{currentBirdData.species}</div>
            <AudioPlayer src={currentBirdData.audio} />
            <div className = 'descrition'>{currentBirdData.description}</div>
            </div> 
        : <p className = 'instruction'>Послушайте плеер. Выберите птицу из списка.</p>
        }
    </div>
    );
};    

export default Card