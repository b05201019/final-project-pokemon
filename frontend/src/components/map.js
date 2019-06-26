import React, { Component } from 'react'


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
            transitionDuration: "500ms",
            transitionTimeingFunction: "linear"
            
        }
        return (
            <div style={style}>
                
            </div>
        )
    }
}

export default map;
