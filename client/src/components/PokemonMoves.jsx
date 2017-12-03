import React, { Component } from 'react';
import css from '../styles.css';

const PokemonMoves = (props) => {

	return (
			<div className={css.stats}>
        <h3>Attacks</h3>
        {props.pokemon.map(move =>
          <li>{move.name}</li>)}
      </div>
		);

}

export default PokemonMoves;