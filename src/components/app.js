import React, { Component } from 'react';
import Header from './header/header';
import Question from './question/question';
import Card from './card/card';
import List from './list/list';
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
      isWin: false,
      isGameComplited: false
    };
    this.nextPage = this.nextPage.bind(this);
    this.onItemSelected = this.onItemSelected.bind(this);
    this.newGame = this.newGame.bind(this);
    this.completeTheGame = this.completeTheGame.bind(this);
  }

  onItemSelected(id){
    const maxPoints = 5;
    const audio = new Audio;
    const srcTrue = 'https://freesound.org/data/previews/342/342210_6130807-lq.mp3';
    const srcFalse = 'https://freesound.org/data/previews/483/483598_6436863-lq.mp3';
    audio.preload;
    if(id === this.state.random && !this.state.isWin){ 
      this.setState({isWin: true, score: this.state.score += maxPoints - this.state.step},()=>{
        audio.src = srcTrue;
        audio.play();
      });
    } else if(!this.state.isWin) {
        audio.src = srcFalse;
        audio.play();
    }
    this.setState({isSelected: true, id: id, step: this.state.step += 1});
    
  }

  completeTheGame(){
    this.setState({isGameComplited: true});
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
      isWin: false,
      isGameComplited: false
    });
  }

  render() {
    const {isGameComplited ,score, id, page, random, isSelected, isWin} = this.state;
    return (
      <div className = 'wrapper'>
        {isGameComplited ? (<div className = "win">
            <Header score = {score} page = {page}/>
            <div className = 'win-massage'></div>
            {
              score !== 30 ? (
                <div>
                  <h1>Поздравляем !</h1>
                  <h2>Ты набрал {score} из 30</h2>
                </div>) : ( 
                <div>
                  <h1>Лучший результат !</h1>
                  <img className = 'win-image' src = 'assets/icons/win.jpg'></img>
                </div>
              )
            }
            <div className = 'btn' onClick = {this.newGame}>Попробовать снова</div>
          </div>) 
        : (<div className = 'container'>
            <Header score = {score} page = {page}/>
            <Question page = {page} random = {random} isWin = {isWin}/>
            <Card id = {id} isSelected = {isSelected} page = {page}/>
            <List page = {page} onItemSelected = {this.onItemSelected} isWin = {isWin} random = {random}/>
            {isWin ? (<div className = 'btn' onClick = {page === 5 ? this.completeTheGame : this.nextPage}>{page === 5 ? 'Завершить' : 'Слудующий вопрос'}</div>) : (<div className = 'btn disable'>Слудующий вопрос</div>)}
          </div>)}
        
      </div>
    );
  }
}

export default App;