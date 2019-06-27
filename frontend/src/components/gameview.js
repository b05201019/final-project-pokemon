import React, { Component } from 'react'
import Character from "./character"
import Map from "./map"
import Menu from '../containers/menu'


class gameview extends Component {
    style = {
        background: "green",
        width: "1000px",
        height: "800px",
        position: "absolute",
        top: "0px",
        left: "50%",
        transform: "translateX(-50%)",
        overflow: "hidden",
    }
    render() {
        return (
            <div style={this.style}>
                <Map position={this.props.position}/>
                <Character characterPositionInMap={this.props.characterPositionInMap}/>
                {this.props.openMenu ? <Menu />:null}
            </div>
        )
    }
}

export default gameview
