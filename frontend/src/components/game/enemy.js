import React, { Component } from 'react'

class enemy extends Component {
    render() {
        var style = {
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            background: "red",
            position: "absolute",
            top: (this.props.enemy.position.top).toString()+"px",
            left: (this.props.enemy.position.left).toString()+"px",
            textAlign: "center",
        }
        return (
            <div style = {style}>
                <p>{this.props.enemy.name}</p>
            </div>
        )
    }
}


export default enemy
