import React, { Component } from 'react';
import birdsData from '../../data/birds'
import './list.sass'

const List = (props) => {
    const {page} = props;
    return (
        <div className = 'list'>
            <ul className = 'birds-list'>
                {birdsData[page].data.map((el)=>(
                    <li key = {el.id}>{el.name}</li>
                ))}
            </ul>
        </div>
    );
}
export default List