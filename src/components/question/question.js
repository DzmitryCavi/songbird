import React, { Component } from 'react';
import './question.sass'

const Question = (props) => {
    const {page , random, isWin} = props;
    return (
        <div className = 'question'>
            <img src = 'assets/icons/bird.png'></img>
        </div>
    );
}

export default Question