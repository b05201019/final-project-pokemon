import React, { Component } from 'react'
import Enemy from './enemy'


class map extends Component {
    render() {
        var style={
            color: "white",
            width: "1000px",
            height: "800px",
            background: "grey",
            position: "absolute",
            left: this.props.position.left+"px",
            top: this.props.position.top+"px",
            transitionProperty: "top left",
            transitionDuration: "300ms",
            transitionTimeingFunction: "linear"
        }
        return (
            <div style={style}>
                <Enemy enemy={this.props.enemy[0]} characterPositionInMap={this.props.characterPositionInMap}/>
            </div>
        )
    }
}

export default map;
