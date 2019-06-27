import React, { Component } from 'react'

export default class logout extends Component {
    render() {
        var isSelected = this.props.isSelected?{
            background:"blue",
            color: "white",
        }:{};
        return (
            <div style={{...this.props.style, ...isSelected}}>
                <p>登出</p>
            </div>
        )
    }
}
