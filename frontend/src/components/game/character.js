import React, { Component } from 'react'

class character extends Component {
    render() {
        var style = {
            background: "white",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            position: "absolute",
            top: (this.props.characterPositionInMap.top).toString()+"px",
            left: (this.props.characterPositionInMap.left).toString()+"px",
            textAlign: "center",
            transform: "rotate("+(90+this.props.facing).toString()+"deg)",
        }
        return (
            <div style={style}>
                <p>:D</p>
            </div>
        )
    }
}

export default character
