import React, { Component } from 'react';
import InfoCard from '../components/InfoCard';

class FightingDisplayArea extends Component {
    state = {  }
    render() { 
        return ( 
            <div className = 'Fighting-Display-Area'>
                <div className = 'Fighting-Display-Left'>
                    <InfoCard roleInfo = {this.props.roleInfo.enemy} />
                    <img src = {this.props.roleInfo.player.backImg}></img>
                </div>
                <div className = 'Fighting-Display-Right'>
                    <img src = {this.props.roleInfo.enemy.frontImg} style={{width:"400px", height:"450px"}}></img>
                    <InfoCard roleInfo = {this.props.roleInfo.player} />
                </div>
            </div>
         );
    }
}
 
export default FightingDisplayArea;