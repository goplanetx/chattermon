import React, { Component } from 'react';
import css from '../styles.css';

const PokemonMoves = (props) => {

	return (
		<div className={css.moves}>
      {props.pokemon.moves.map(move =>
        <div key={move.name}>{move.name} pwr: {move.power ? move.power : 0} - acc: {move.accuracy}</div>)}
    </div>  
	);

}

export default PokemonMoves;