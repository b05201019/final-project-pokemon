import React, { Component } from 'react';
import FightingControlArea from './FightingControlArea';
import FightingTextArea from './FightingTextArea';

class FightingFooter extends Component {
    state = {  }
    render() { 
        return ( 
            <div className = 'Fighting-Footer'>
                <FightingControlArea attack = {this.props.attack} moveArrow = {this.props.moveArrow}
                    arrowPosition = {this.props.arrowPosition}
                    playerExecuteAttack = {this.props.playerExecuteAttack}/>
                <FightingTextArea text = {this.props.text}/>
            </div>
         );
    }
}
 
export default FightingFooter;