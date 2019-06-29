import React, { Component } from 'react';

class FightingPrepareArea extends Component {
    state = {  }

    constructor(props){
        super(props);

        document.addEventListener('keydown', e => {
            if(this.props.displayState === 'visible'){
                this.props.movePrepareArrow(38-e.keyCode);
            }
        })
    }

    arrowStyle = [{visibility: 'visible'}, {visibility: 'hidden'}, {visibility: 'hidden'}];

    render() { 
        console.log(this.props.prepareArrow);
        return ( 
            this.props.displayState==="visible"&&<div className = 'FightingPrepareArea' style = {{visibility: this.props.displayState}}>
                <div style = {{display: 'flex', flexDirection: 'row', fontSize: '60px'}}>
                    <div style = {{margin: 'auto'}}>
                        <span style = {this.arrowStyle[(this.props.prepareArrow+3)%3]}>></span>
                        <span>戰鬥</span>
                    </div>
                    <div style = {{margin: 'auto'}}>
                        <span style = {this.arrowStyle[(this.props.prepareArrow+4)%3]}>></span>
                        <span>背包</span>
                    </div>
                    <div style = {{margin: 'auto'}}>
                        <span style = {this.arrowStyle[(this.props.prepareArrow+5)%3]}>></span>
                        <span>翹課</span>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default FightingPrepareArea;