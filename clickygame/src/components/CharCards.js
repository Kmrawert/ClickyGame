import React, { Component } from "react";
import Card from './components/Card';
import AppendingCards from './components/AppendingCards';
import App from './src';

class CharCards extends Component {
    state = {
      character: [],
      image: "",
      name: "",
      funFact: ""
    };
  
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };
  
    shuffle (cardElems) {
        return cardElems.sort(function (a, b) { return (0.5 - Math.random()) })
    };
  
    handleClick = event => {
      event.preventDefault();
      console.log("I have been clicked!");
      if (this.state.name && this.state.funFact) {
        ({
          image: this.state.image,
          name: this.state.name,
          funFact: this.state.funFact
        })
          .then(res => this.shuffle())
          .catch(err => console.log(err));
      }
    };
    render() {
        return CharCards
    }

  };

  export default CharCards;