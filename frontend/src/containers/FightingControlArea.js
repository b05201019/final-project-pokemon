import React, { Component } from 'react';
import AttackTag from '../components/AttackTag';

class FightingControlArea extends Component {
    state = { 
        currentPosition: {x: 0, y: 0},

        attack: [{name: 'blablabla', damage: 120, speed: 5, probability: 0.1, totalPP: 5, currentPP: 5, arrow: 'visible'},
                    {name: 'DaDaDa', damage: 60, speed: 5, probability: 0.6, totalPP: 15, currentPP: 15, arrow: 'hidden'},
                    {name: 'WoooooW', damage: 20, speed: 5, probability: 1, totalPP: 20, currentPP: 20, arrow: 'hidden'},
                    {name: 'YoYoYo', damage: 100, speed: 5, probability: 0.4, totalPP: 10, currentPP: 10, arrow: 'hidden'}
                ],

        enemyAttack: [{name: 'blablabla', damage: 120, speed: 5, probability: 0.1, totalPP: 5, currentPP: 5, arrow: 'visible'},
                    {name: 'DaDaDa', damage: 60, speed: 5, probability: 0.6, totalPP: 15, currentPP: 15, arrow: 'hidden'},
                    {name: 'WoooooW', damage: 20, speed: 5, probability: 1, totalPP: 20, currentPP: 20, arrow: 'hidden'},
                    {name: 'YoYoYo', damage: 100, speed: 5, probability: 0.4, totalPP: 10, currentPP: 10, arrow: 'hidden'}
                ],
    }

    constructor(props) {
        super();
        document.addEventListener( 'keydown', e => {
            if(e.keyCode <= 40 && e.keyCode >= 37){
                var attack = this.state.attack;
                attack[this.state.currentPosition.x+2*this.state.currentPosition.y].arrow = 'hidden';
                if( e.keyCode === 37 || e.keyCode === 39){
                    this.moveArrow({x: 1, y: 0});
                } else{
                    this.moveArrow({x: 0, y: 1});
                }
                attack[this.state.currentPosition.x+2*this.state.currentPosition.y].arrow = 'visible';
                this.setState({attack: attack});
            }

            if(e.keyCode === 13 || e.keyCode === 32){
                this.executeAttack();
            }
        });
    }

    moveArrow = e => {
        this.setState({currentPosition: {x: (this.state.currentPosition.x+e.x)%2, y: (this.state.currentPosition.y+e.y)%2}});
    }

    executeAttack = () => {
        var attack = this.state.attack;
        if(attack[this.state.currentPosition.x+2*this.state.currentPosition.y].currentPP > 0){
            attack[this.state.currentPosition.x+2*this.state.currentPosition.y].currentPP--;
        
            if(Math.random() <= attack[this.state.currentPosition.x+2*this.state.currentPosition.y].probability){
                
                this.props.updateBlood({myBlood: this.props.myBlood, enemyBlood: this.props.enemyBlood - attack[this.state.currentPosition.x+2*this.state.currentPosition.y].damage});
                console.log('Attack successfully');
            } else{
                console.log('Attack fail');
            }
            this.setState({attack: attack});
            
            if(this.props.enemyBlood <= 0){
                console.log('You win');
            }
            var count = 0;
            var index = Math.floor(Math.random()*4);
            var enemyAttack = this.state.enemyAttack;
            
            while(enemyAttack[index+count].currentPP === 0 && count < 4){
                count++;
            }

            if(count != 4){
                if(Math.random() <= enemyAttack[index+count].probability){
                    enemyAttack[index+count].currentPP--;
                    this.props.updateBlood({myBlood: this.props.myBlood - enemyAttack[index+count].damage, enemyBlood: this.props.enemyBlood});
                }
                this.setState({enemyAttack: enemyAttack});
            }

            if(this.props.myBlood <= 0){
                console.log('You lose');
            }

            console.log('Your blood: '+this.props.myBlood);
            console.log('Enemy\'s blood: '+this.props.enemyBlood);
        }

        
    }

     render() { 
        return ( 
            <div className = 'FightingControlArea'>
                <div className = 'AttackTable'>
                    <div>
                        <AttackTag attack = {this.state.attack[0]} />                        
                        <AttackTag attack = {this.state.attack[1]} />                        
                    </div>
                    <div>
                        <AttackTag attack = {this.state.attack[2]} />                        
                        <AttackTag attack = {this.state.attack[3]} />                        
                    </div>
                </div>
                <div className = 'AttackInfo'>
                    <div>
                        <span>PP</span>
                        <span>{this.state.attack[this.state.currentPosition.x+2*this.state.currentPosition.y].currentPP}/{this.state.attack[this.state.currentPosition.x+2*this.state.currentPosition.y].totalPP}</span>
                    </div>
                    <div>
                        <span>damage</span>
                        <span>{this.state.attack[this.state.currentPosition.x+2*this.state.currentPosition.y].damage}</span>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default FightingControlArea;