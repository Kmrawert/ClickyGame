import React, { Component } from "react";
import Card from './Card';
import ScoreTab from './ScoreTab';
import {DBZ} from "./Character"

let newCharacters = DBZ;

class Game extends Component {
    state = {
      character: [],
      // image: "",
      // name: "",
      // funFact: "",
      wins: 0, 
      losses: 0,
      message: "",
      clicked: []
    }

    score = (prob) => {
      if (prob === "win") {
        var newWScore = this.state.wins +1
        this.setState({wins: newWScore, message: "correct", character: this.shuffle(newCharacters)})

        } else if(prob === "lose") {
          var newLScore = this.state.losses +1
        this.setState({losses: newLScore, message: "incorrect", character: this.shuffle(newCharacters)})

      } this.restartGame()
    }

    restartGame= () => {
      if (this.state.wins >= 9) {
      this.setState({wins: 0, losses: 0, character: this.shuffle(newCharacters), message: "New Game!"} )
      } return 
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

    componentDidMount() {
      this.setState({character: this.shuffle(newCharacters)})
    }

    click = (value) => {
      var win = true;
      console.log(this.state.clicked)
      this.state.clicked.forEach(id => {
        if (id !== value) {
          win = false;
          console.log(this.state.clicked.id)
        }
      })
      this.setState({clicked: [...this.state.clicked, value]})
      if (win) {
      return this.score('win');
    } 
      return this.score('lose');
      }

    render() {
        return (
          <div className="gameCont">
            <ScoreTab wins = {this.state.wins} message = {this.state.message} losses = {this.state.losses}/>
          {this.state.character.map(item => 
          <Card value={item.id} image={item.image} name={item.name} funFact={item.funFact} character={this.click}/>
          )} 
          </div>
        )
  }
};

  export default Game;