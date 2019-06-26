import React, { Component } from 'react'
import PokemonDetailsView from '../../components/pokemonDetailsView';

export default class pokemonDetail extends Component {
    render() {
        var isSelected = this.props.isSelected?{
            background:"blue",
            color: "white",
        }:{};
        return (
            <div style={{...this.props.style, ...isSelected}}>
                <p>神奇寶貝</p>
                {this.props.isSelected&&this.props.openDetail?<PokemonDetailsView />:null}
            </div>
        )
    }
}
