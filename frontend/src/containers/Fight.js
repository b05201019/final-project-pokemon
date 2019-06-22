import React, { Component } from 'react';
import FightingDisplayArea from './FightingDisplayArea';
import FightingControlArea from './FightingControlArea';


class Fight extends Component {
    state = { Blood: {my: {current: 200, total: 200}, enemy: {current: 200, total: 200}} }

    updateBlood = e => {
        var Blood = this.state.Blood;
        Blood.my.current = e.myBlood;
        Blood.enemy.current = e.enemyBlood;
        this.setState({Blood: Blood});
    } 

    render() { 
        return ( 
            <div className = 'Fight-Main-Field'>
                <FightingDisplayArea Blood = {this.state.Blood}/>
                <FightingControlArea myBlood = {this.state.Blood.my.current} enemyBlood = {this.state.Blood.enemy.current} updateBlood = {this.updateBlood}/>
            </div>
         );
    }
}
 
export default Fight;