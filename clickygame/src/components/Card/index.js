import React from 'react';
import './style.css';

function Card (props) {

    return (
      <div className="card">
        <div className="img-container">
      <img src={props.image} alt={props.name} style={{ maxWidth: '100%' }} onClick={() => props.character(props.value)}/>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.funFact}</p>
        </div>
        </div>
    </div> 
    )
  };

  export default Card;