import React, { Component } from "react";
import './App.css';
import './index.css';
import Game from './components/Game';

function App() {
  return (
    <div className="game">
      <header className="Game-header">
        <h1>Clicky Game</h1> 
        <p>Choose your favorite character, and keep clicking on a character that you haven't clicked on yet to test your memory! </p>
      </header>
  
        <div className="characterCard">
          <Game />
        </div>
      </div>

  );
}

export default App;


// game component (will contain most of logic - nav component & message - score, header component, footer component, container component - children map for each item - handle click in game component) 
// shuffle function to re-distribute the pictures. math(floor).random - 
// state - data, score, end score
// item components - div tag, click event, style/classname 1 card that renders 9 times