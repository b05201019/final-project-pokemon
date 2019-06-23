import React, { Component } from 'react';
import FightingControlArea from './FightingControlArea';
import FightingDisplayArea from './FightingDisplayArea';

class Fight extends Component {
    state = { arrowPosition: {x: 0, y: 0}, 
    
        roleInfo: {
            player: { name: 'Ian', level: 18, currentBlood: 200, totalBlood: 200, 
                        frontImg: '', 
                        
                        backImg: require('../img/player.png'),
                        
                        attack: [{name: 'blablabla', damage: 120, speed: 5, probability: 0.1, totalPP: 5, currentPP: 5, arrow: 'visible'},
                            {name: 'DaDaDa', damage: 60, speed: 5, probability: 0.6, totalPP: 15, currentPP: 15, arrow: 'hidden'},
                            {name: 'WoooooW', damage: 20, speed: 5, probability: 1, totalPP: 20, currentPP: 20, arrow: 'hidden'},
                            {name: 'YoYoYo', damage: 100, speed: 5, probability: 0.4, totalPP: 10, currentPP: 10, arrow: 'hidden'}
                        ]
            },
        
            enemy: { name: 'Ric', level: 43, currentBlood: 200, totalBlood: 200,
                        frontImg: require('../img/enemy.png'),
                        
                        backImg: '',
                        
                        attack: [{name: 'blablabla', damage: 120, speed: 5, probability: 0.1, totalPP: 5, currentPP: 5, arrow: 'visible'},
                            {name: 'DaDaDa', damage: 60, speed: 5, probability: 0.6, totalPP: 15, currentPP: 15, arrow: 'hidden'},
                            {name: 'WoooooW', damage: 20, speed: 5, probability: 1, totalPP: 20, currentPP: 20, arrow: 'hidden'},
                            {name: 'YoYoYo', damage: 100, speed: 5, probability: 0.4, totalPP: 10, currentPP: 10, arrow: 'hidden'}
                        ]
            },
        },

    }

    moveArrow = e => {
        var roleInfo = this.state.roleInfo;
        var arrowPosition = this.state.arrowPosition;


        roleInfo.player.attack[arrowPosition.x+2*arrowPosition.y].arrow = 'hidden';
        arrowPosition = {x: (arrowPosition.x+e.x)%2, y: (arrowPosition.y+e.y)%2};
        roleInfo.player.attack[arrowPosition.x+2*arrowPosition.y].arrow = 'visible';

        this.setState({arrowPosition: arrowPosition, roleInfo: roleInfo});
    }

    playerExecuteAttack = index => {
        var roleInfo = this.state.roleInfo;

        if(this.state.roleInfo.player.attack[index].currentPP > 0){
            roleInfo.player.attack[index].currentPP--;

            console.log(roleInfo.player.name+'使出'+roleInfo.player.attack[index].name);

            if(Math.random() < roleInfo.player.attack[index].probability){
                console.log('成功命中!');

                roleInfo.enemy.currentBlood -= roleInfo.player.attack[index].damage;
            } else{
                console.log('攻擊沒有命中...');
            }
            
            this.setState({roleInfo: roleInfo});
    
            if(roleInfo.enemy.currentBlood <= 0){
                console.log('你贏了');
            } else{
                console.log('輪到對面的回合');
    
                var index = Math.floor(Math.random()*4);
                var count = 0;
    
                while(count < 4 && roleInfo.enemy.attack[index+count].currentPP == 0){
                    count++;
                }
    
                this.enemyExcuteAttack(index+count);
            }
        }
    }

    enemyExcuteAttack = index => {
        var roleInfo = this.state.roleInfo;

        roleInfo.enemy.attack[index].currentPP--;
        
        console.log(roleInfo.enemy.name+'使出'+roleInfo.enemy.attack[index].name);

        if(Math.random() < roleInfo.enemy.attack[index].probability){
            roleInfo.player.currentBlood -= roleInfo.enemy.attack[index].damage;

            console.log('成功命中!');
        } else{
            console.log('攻擊沒有命中');
        }

        if(roleInfo.player.currentBlood <= 0){
            console.log('你輸了');
        }

        this.setState({roleInfo: roleInfo});
    }

    render() { 
        return ( 
            <div className = 'Fight-Main-Field'>
                <FightingDisplayArea roleInfo = {this.state.roleInfo}/>
                <FightingControlArea attack = {this.state.roleInfo.player.attack} moveArrow = {this.moveArrow}
                    arrowPosition = {this.state.arrowPosition}
                    playerExecuteAttack = {this.playerExecuteAttack}/>
            </div>
         );
    }
}
 
export default Fight;