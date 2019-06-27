import React, { Component } from 'react'

class character extends Component {
    render() {
        var style = {
            background: "white",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            position: "absolute",
            top: "calc(50% + "+this.props.characterPositionInMap.top+"px)",
            left: "calc(50% + "+this.props.characterPositionInMap.left+"px)",
            transform: "translate(-100%, -100%)",
        }
        // console.log(style.top);
        // console.log(style.left);
        // console.log(this.props.characterPositionInMap)
        return (
            <div style={style}>
            </div>
        )
    }
}

export default character
