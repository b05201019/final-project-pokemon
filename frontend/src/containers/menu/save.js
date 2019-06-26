import React, { Component } from 'react'

export default class save extends Component {
    render() {
        var isSelected = this.props.isSelected?{
            background:"blue",
            color: "white",
        }:{};
        return (
            <div style={{...this.props.style, ...isSelected}}>
                <p >存檔</p>
            </div>
        )
    }
}
