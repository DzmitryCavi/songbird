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
      random: null,
      score: 0,
      step: 0,
      isCorrectAnswerSelected: false,
      isWin: false
    };
    this.nextPage = this.nextPage.bind(this);
  }

  nextPage(){
    this.setState({page: this.state.page +=1});
  }

  render() {
    const {score, id, page, random, step, isCorrectAnswerSelected, isWin} = this.state;
    return (
      <div className = 'container'>
       <Header score = {score} page = {page}/>
       <Question/>
       <Card/>
       <List page = {page}/>
       <Btn onClick = {this.nextPage} isCorrectAnswerSelected = {isCorrectAnswerSelected}/>
      </div>
    );
  }
}

export default App;