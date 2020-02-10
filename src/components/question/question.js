import React, { Component } from 'react'
import birdsData from '../../data/birds'
import AudioPlayer from "react-h5-audio-player";
import './question.sass'

const Question = (props) => {
    const {page , random, isWin} = props;
    const currentBirdData = birdsData[page].data[random];
    const audioUrl = currentBirdData.audio;
    const imgUrl = currentBirdData.image;
    const bird = currentBirdData.name;
    return (
        <div className = 'question'>
            <img src = {isWin ? imgUrl : 'assets/icons/bird.png'}></img>
            <div className = 'bird-info'>
            <div className = 'bird-name'>{isWin ? bird : '******'}</div>
            <AudioPlayer src = {audioUrl}/>
            </div>
        </div>
    );
}

export default Question