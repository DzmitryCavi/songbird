import React, { Component } from 'react';
import birdsData from '../../data/birds'
import './header.sass'

const Header = (props) => {
    const {page , score} = props;
    return (
        <div className = 'header'>
            <div className = 'top-panel'>
                <span className = 'logo'></span> 
                <span className = 'score'>Score: {score}</span>
            </div>
            <ul>
                { birdsData.map((el)=>(
                    <li key = {el.groupId}><a className = {el.groupId === page ? 'active' : ''}>{el.groupName}</a></li>
                ))}
            </ul>
        </div>
    );
}
    
export default Header
