import React, { Component } from 'react'
import birdsData from '../../data/birds'
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
            <div className = 'bird-name'>{isWin ? bird : '******'}</div>
            <audio src = {audioUrl} controls></audio>  
        </div>
    );
}

export default Question