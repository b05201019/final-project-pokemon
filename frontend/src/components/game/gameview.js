import React, { Component } from 'react'
import Character from "./character"
import Map from "./map"
import Menu from '../../containers/menu'


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

    facing(){
        const nowFacing = this.props.character.characterFacing;
        if(nowFacing.top) return 0;
        if(nowFacing.right) return 90;
        if(nowFacing.down) return 180;
        if(nowFacing.left) return 270;
    }

    render() {
        this.facing();
        return (
            <div style={this.style}>
                <Map map={this.props.map.name} enemy={this.props.map.enemy} position={this.props.position} characterPositionInMap={this.props.character.characterPositionInMap}/>
                <Character facing={this.facing()} characterPositionInMap={this.props.character.characterPositionInMap}/>
                {this.props.openMenu ? <Menu />:null}
            </div>
        )
    }
}

export default gameview
