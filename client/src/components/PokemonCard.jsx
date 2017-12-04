import React, { Component } from 'react';
import Sprite from './Sprite.jsx';
import PokemonMoves from './PokemonMoves.jsx';
import css from '../styles.css';

export default class PokemonCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderSprite: true
    }
  }

  render() {
    return (
      <div>
        <Sprite sprites={this.props.sprites} />
        <h5 style={{marginBottom: '0px', marginTop: '2px', bottom: 0}}>{this.props.name}</h5>
        <h6 style={{marginBottom: '0px'}}>{this.props.type[0]}</h6>
        <h6 style={{marginBottom: '0px'}}>{this.props.health} / {this.props.initialHealth}</h6>
      </div>
    )
  }
}