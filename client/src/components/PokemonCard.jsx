import React, { Component } from 'react';
import Sprite from './Sprite.jsx';
import PokemonMoves from './PokemonMoves.jsx';
import css from '../styles.css';

const PokemonCard =(props) => {

    return (
      <div>
        <Sprite sprites={props.sprites} />
        <h5 style={{marginBottom: '0px', marginTop: '2px', bottom: 0}}>{props.name}</h5>
        <h6 style={{marginBottom: '0px'}}>{props.types[0]}</h6>
        <h6 style={{marginBottom: '0px'}}>{props.health} / {props.initialHealth}</h6>
      </div>
    )
  
}

export default PokemonCard;