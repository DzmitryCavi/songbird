import React, { Component } from 'react';
import './card.sass'

const Card = (props) => {
    const {page , random, isWin} = props;
    return (
        <div className = 'card'>
            Послушайте плеер.
            Выберите птицу из списка.
        </div>
    );
};    

export default Card