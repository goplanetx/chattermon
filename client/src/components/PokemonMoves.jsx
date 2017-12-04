import React, { Component } from 'react';
import css from '../styles.css';

const PokemonMoves = (props) => {

	return (
		<div className={css.moves}>
      {props.pokemon.moves.map(move =>
        <div key={move.name}>{move.name}</div>)}
    </div>  
	);

}

export default PokemonMoves;