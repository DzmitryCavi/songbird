import React, { Component } from 'react';
import Header from './header/header';
import Question from './question/question';
import Card from './card/card';
import List from './list/list';
import Btn from './button/button';
import '../styles/app.sass'

class App extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      page: 0,
      random: this.getRandomInt(),
      score: 0,
      step: 0,
      isSelected: false,
      isWin: false
    };
    this.nextPage = this.nextPage.bind(this);
    this.onItemSelected = this.onItemSelected.bind(this);
    this.newGame = this.newGame.bind(this);
  }

  onItemSelected(id){
    const maxPoints = 5;
    if(id === this.state.random && !this.state.isWin){this.setState({isWin: true, score: this.state.score += maxPoints - this.state.step})}
    this.setState({isSelected: true, id: id, step: this.state.step += 1});
  }

  getRandomInt(){
    const min = 1;
    const max = 6;
    return Math.floor(Math.random() * (max - min)) + min;
  }

  nextPage(){
    this.setState({page: this.state.page +=1, 
                   random: this.getRandomInt(), 
                   step: 0,
                   isSelected: false,
                   isWin: false});
  }

  newGame(){
    this.setState({
      id: 0,
      page: 0,
      random: this.getRandomInt(),
      score: 0,
      step: 0,
      isSelected: false,
      isWin: false
    });
  }

  render() {
    const {score, id, page, random, isSelected, isWin} = this.state;
    return (
      <div className = 'container'>
       <Header score = {score} page = {page}/>
       <Question page = {page} random = {random} isWin = {isWin}/>
       <Card id = {id} isSelected = {isSelected} page = {page}/>
       <List page = {page} onItemSelected = {this.onItemSelected}/>
       {isWin ? (<div className = 'btn' onClick = {page === 5 ? this.newGame : this.nextPage}>{page === 5 ? 'Начать новую игру' : 'Слудующий вопрос'}</div>) : (<div className = 'btn disable'>Слудующий вопрос</div>)}
      </div>
    );
  }
}

export default App;