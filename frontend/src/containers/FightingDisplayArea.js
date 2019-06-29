import React, { Component } from 'react';
import InfoCard from '../components/InfoCard';

class FightingDisplayArea extends Component {
    state = {  }
    render() { 
        return ( 
            <div className = 'Fighting-Display-Area'>
                <div className = 'Fighting-Display-Left'>
                    <InfoCard roleInfo = {this.props.roleInfo.enemy}/>
                    <img src = {this.props.roleInfo.player.backImg} style = {{height: '450px', width: '600px', position: 'absolute', top: '140px'}}></img>
                </div>
                <div className = 'Fighting-Display-Right'>
<<<<<<< Updated upstream
                    <img src = {this.props.roleInfo.enemy.frontImg} style={{width:"400px", height:"450px"}}></img>
                    <InfoCard roleInfo = {this.props.roleInfo.player} />
=======
                    <img src = {this.props.roleInfo.enemy.frontImg} style = {{height: '450px', width: '400px', position: 'absolute', left: '600px'}}></img>
                    <InfoCard roleInfo = {this.props.roleInfo.player}/>
>>>>>>> Stashed changes
                </div>
            </div>
         );
    }
}
 
export default FightingDisplayArea;