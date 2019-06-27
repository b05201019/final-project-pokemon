import React, { Component } from 'react';
import FightingControlArea from './FightingControlArea';
import FightingTextArea from './FightingTextArea';

class FightingFooter extends Component {
    state = {  }

    render() { 

        if(this.props.text.upper == '' && this.props.text.lower == ''){
            return ( 
                <div className = 'Fighting-Footer'>
                    <FightingControlArea attack = {this.props.attack} moveArrow = {this.props.moveArrow}
                        arrowPosition = {this.props.arrowPosition}
                        playerExecuteAttack = {this.props.playerExecuteAttack}
                        displayState = {this.props.displayState == 'control'?'visible':'hidden'} />
                </div>
             );
        } else{
            return(
                <div className = 'Fighting-Footer'>
                    <FightingControlArea attack = {this.props.attack} moveArrow = {this.props.moveArrow}
                        arrowPosition = {this.props.arrowPosition}
                        playerExecuteAttack = {this.props.playerExecuteAttack}
                        displayState = {this.props.displayState == 'control'?'visible':'hidden'} />
                    <FightingTextArea text = {this.props.text} displayState = {this.props.displayState == 'text'?'visible':'hidden'}/>
                </div>
            )
        }
        // return ( 
        //     <div className = 'Fighting-Footer'>
        //         <FightingControlArea attack = {this.props.attack} moveArrow = {this.props.moveArrow}
        //             arrowPosition = {this.props.arrowPosition}
        //             playerExecuteAttack = {this.props.playerExecuteAttack}
        //             displayState = {this.props.displayState == 'control'?'visible':'hidden'} />

                

        //         {/* {this.props.textArray.map( obj => {
        //             return <FightingTextArea text = {obj} displayState = {this.props.displayState == 'text'?'visible':'hidden'}/>
        //         })} */}
        //         {/* <FightingTextArea text = {this.props.text} displayState = {this.props.displayState == 'text'?'visible':'hidden'}/> */}
        //     </div>
        //  );
    }
}
 
export default FightingFooter;