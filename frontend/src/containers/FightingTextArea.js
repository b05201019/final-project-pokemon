import React, { Component } from 'react';

class FightingTextArea extends Component {
    state = {}

    render() { 
        return ( 
            <div className = 'Fighting-Text-Area' style = {{visibility: this.props.displayState}}>
                <div className = 'text-input fighting-text-input-upper'>
                    {this.props.text.upper}
                </div>
                <div className = 'text-input fighting-text-input-lower'>
                    {this.props.text.lower}
                </div>
            </div>
        );
    }
}
 
export default FightingTextArea;