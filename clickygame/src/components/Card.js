import React from 'react';
import CharCards from './components/CharCards';

function Card (props) {

    return (
      <div className="card" style={{ width: '30%' }}>
      <img src={props.image} className="CharacterStats" alt="Dragon Ball Character" style={{ maxWidth: '100%' }} onClick={props.handleClick}/>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.funFact}</p>
        </div>
    </div> 
    )
  };

  export default Card;