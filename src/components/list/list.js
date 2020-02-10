import React, {Component} from 'react';
import birdsData from '../../data/birds'
import './list.sass'

class List extends Component {
    constructor(props){
        super(props);
    }

    componentDidUpdate(prevProps){
        if(prevProps.page !== this.props.page){
            for(let key in this.refs){
                this.refs[key].className = 'list-item';
            }
        }
    }

    clickHendler(id){
        const birdId = id - 1;
        this.props.onItemSelected(birdId);
        if(!this.props.isWin) {this.refs[id].className += this.props.random === birdId ? ' sucsess' : ' error'};
    }

    render(){
        const {page} = this.props;
        return (
            <div className = 'list'>
                <ul className = 'birds-list'>
                    {birdsData[page].data.map((el)=>(
                        <li className = 'list-item' ref = {el.id} key = {el.id} onClick = {() => {this.clickHendler(el.id)}}>{el.name}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default List