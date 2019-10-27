import React, { Component } from "react";
import Card from './Card';
import ScoreTab from './ScoreTab';
import {DBZ} from "./Character"

let newCharacters = DBZ;

class Game extends Component {
    state = {
      character: [],
      image: "",
      name: "",
      funFact: "",
      wins: 0, 
      losses: 0,
      message: ""
    }

    score = (prob) => {
      if (prob === "win") {
        this.setState({message: "correct"})
        return this.setState(prevState => ({wins: prevState.wins +1}))
        }else if(prob === "lose") {
        this.setState({message: "incorrect"})
        return this.setState(prevState => ({losses: prevState.losses +1}))}
      }

    shuffle = (array) => {
      var i = 0, 
      j = 0,
      temp = null
      for (i = array.length -1; i > 0; i -= 1){
        j = Math.floor(Math.random() * (i + 1))
        temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
      return array
    }

    componentDidMount(){
      this.shuffle(newCharacters)
    }

    componentDidUpdate() {
      this.shuffle(newCharacters)
    }
  
    click = (key) => {
      if (this.state.character.indexOf(key) > -1){
        return this.score('lose')      
      }
      else {
        this.setState(prevState => ({character: [...prevState.character,key]}))
        return this.score('win')
      }
      
      }

    render() {
        return (
          <div className="gameCont">
            <ScoreTab wins = {this.state.wins} message = {this.state.message} losses = {this.state.losses}/>
          {newCharacters.map(item => 
          <Card image={item.image} name={item.name} funFact={item.funFact} character={this.click}/>
          )} 
          </div>
        )
  }
};

  export default Game;