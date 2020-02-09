import React, { Component } from 'react';

const Button = (props) => {
    const {isSelected, onClick} = props;
    return (
        <div className = 'btn' onClick = {onClick}>
            Btn
        </div>
    );
}
export default Button