import React from 'react';
import Card from './Card';
import CharCards from './components/CharCards';

function AppendingCards(props) {
    const cardElems = props.data.map((prop) => 
    <Card image={prop.image} name={prop.name} funFact={prop.funFact} />
    )
    return cardElems
  };

  export default AppendingCards;