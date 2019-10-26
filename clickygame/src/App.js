import React, { Component } from "react";
import './App.css';
import Card from './components/Card';
import AppendingCards from './components/AppendingCards';
import CharCards from './components/CharCards';

const broly = 'https://giantbomb1.cbsistatic.com/uploads/scale_small/15/155548/2280362-lss3_broly.png';
const goku = 'http://media.japanpowered.com/images/goku.png';
const vegeta = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn5j1DV0a4fXbRVcDLrJKBKSgS4_kXBPDylvphTKWnN3kgW7GZ9w';
const goten = 'https://i.pinimg.com/originals/12/65/94/126594bd2260d6824f0546cfd7de4bb0.jpg';
const gohan = 'https://i.pinimg.com/736x/a6/89/64/a6896491830140271b26fdfab7c135cf.jpg';
const frieza = 'https://comicvine1.cbsistatic.com/uploads/original/11123/111234294/5129283-0439746113-frieza.jpeg';
const piccolo = 'https://static.tvtropes.org/pmwiki/pub/images/piccolo_super.png';
const bulma = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGgX0ZSJN93Q7sN0W-COmh4RvibsXai0yA5nLkORyQoJKfuTU-';
const trunks = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQINmC9JfCfS9IvhYlI4Tmhwgq4OlZRFH50_1f-Kw7AVUDNtsMxvA&s';

let dBZ = [
  {
    image: broly,
    name: "Broly",
    funFact: "Fun Fact here" 
  },
  {
    image: goku, 
    name: "Goku", 
    funFact: "Fun Fact here"
  },
 {
    image: vegeta, 
    name: "Vegeta", 
    funFact: "Fun Fact here"
  },
  {
    image: goten, 
    name: "Goten", 
    funFact: "Fun Fact here"
  },
  {
    image: gohan, 
    name: "Gohan", 
    funFact: "Fun Fact here"
  },
  {
    image: frieza, 
    name: "Frieza", 
    funFact: "Fun Fact here"
  },
  {
    image: piccolo, 
    name: "Piccolo", 
    funFact: "Fun Fact here"
  },
  {
    image: bulma, 
    name: "Bulma", 
    funFact: "Fun Fact here"
  },
  {
    image: trunks, 
    name: "Trunks", 
    funFact: "Fun Fact here"
  }
];

function App() {
  return (
    <div className="game">
      <header className="Game-header">
        <h1>Clicky Game</h1> 
        <p>Choose your favorite character, and keep clicking on a character that you haven't clicked on yet to test your memory! </p>
      </header>
      <div className="body">
        <div className="characterCard">
          <AppendingCards data={dBZ} />
        </div>
      </div>
    </div>
  );
}

export default App;


// game component (will contain most of logic - nav component & message - score, header component, footer component, container component - children map for each item - handle click in game component) 
// shuffle function to re-distribute the pictures. math(floor).random - 
// state - data, score, end score
// item components - div tag, click event, style/classname 1 card that renders 9 times