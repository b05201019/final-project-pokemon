import React, { Component } from 'react';
import InfoCard from '../components/InfoCard';

class FightingDisplayArea extends Component {
   state = {  }

   render() { 
      return ( 
         <div className = 'FightingDisplayArea'>
            <div className = 'Fighting-Display-Area-Left'>
               <InfoCard Blood = {this.props.Blood.enemy}/>
               <img src = {require('../img/player.png')}></img>
            </div>
            <div className = 'Fighting-Display-Area-Right'>
               <img src = {require('../img/enemy.png')}></img>
               <InfoCard Blood = {this.props.Blood.my}/>
            </div>
         </div>
      );
   }
}
 
export default FightingDisplayArea;