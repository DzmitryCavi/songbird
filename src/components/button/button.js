import React, { Component } from 'react';
import './button.sass'

const Button = (props) => {
    const {isCorrectAnswerSelected, onClick} = props;
    return (
        isCorrectAnswerSelected ? (<div className = 'btn' onClick = {onClick}>'Next question'</div>) : (<div className = 'btn disable'>Next question</div>)  
    );
}
export default Button