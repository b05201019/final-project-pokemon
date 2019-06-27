import React, { Component } from 'react';
import FightingDisplayArea from './FightingDisplayArea';
import FightingFooter from './FightingFooter';

class Fight extends Component {
    state = { arrowPosition: {x: 0, y: 0}, waitPressEnter: false, displayState: 'control',
    
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

        text: {
            upper: '',
            lower: ''
        },
    }

    sleep = function sleep(time){
        return new Promise((res)=>setTimeout(res, time));
    }

    moveArrow = e => {
        var roleInfo = this.state.roleInfo;
        var arrowPosition = this.state.arrowPosition;


        roleInfo.player.attack[arrowPosition.x+2*arrowPosition.y].arrow = 'hidden';
        arrowPosition = {x: (arrowPosition.x+e.x)%2, y: (arrowPosition.y+e.y)%2};
        roleInfo.player.attack[arrowPosition.x+2*arrowPosition.y].arrow = 'visible';

        this.setState({arrowPosition: arrowPosition, roleInfo: roleInfo});
    }

    playerExecuteAttack = async index => {
        console.log(this.state.textArray);

        this.setState({ waitPressEnter: false});
        var roleInfo = this.state.roleInfo;

        if(roleInfo.player.attack[index].currentPP > 0){
            this.setState({ displayState: 'text'});
            roleInfo.player.attack[index].currentPP--;
            
            this.textDisplay( { upper: roleInfo.player.name+'使出', lower: '' } );
            await this.sleep(this.state.text.upper.length*100);
            this.textDisplay( { upper: roleInfo.player.name+'使出', lower: roleInfo.player.attack[index].name } );
            await this.sleep(this.state.text.lower.length*100);

            if(Math.random() < roleInfo.player.attack[index].probability){
                roleInfo.enemy.currentBlood -= roleInfo.player.attack[index].damage;
                this.textDisplay({upper: '成功擊中!', lower: ''});
                await this.sleep(this.state.text.upper.length*100);
            } else{
                this.textDisplay({upper: '但是失敗了...', lower: ''});
                await this.sleep(this.state.text.upper.length*100);
            }

            this.setState({ roleInfo: roleInfo});

            if(roleInfo.enemy.currentBlood <= 0){
                this.textDisplay({upper: '你贏了!', lower: ''});
                return true;
            } else{
                index = Math.floor(Math.random()*4);
                var count = 0;
    
                while(count < 4 && roleInfo.enemy.attack[index+count].currentPP == 0){
                    count++;
                }

                this.enemyExcuteAttack(index+count);
            }
        }
    }

    textDisplay = obj => {
        this.setState({text: {upper: obj.upper,
                                lower: obj.lower}})
    }

    enemyExcuteAttack = async index => {
        this.textDisplay({ upper: '', lower: ''});
        var roleInfo = this.state.roleInfo;

        roleInfo.enemy.attack[index].currentPP--;
        
        this.textDisplay({ upper: roleInfo.enemy.name+'使出', lower: '' });
        await this.sleep(this.state.text.upper.length*100);
        this.textDisplay({ upper: roleInfo.enemy.name+'使出', lower: roleInfo.enemy.attack[index].name });
        await this.sleep(this.state.text.lower.length*100);


        if(Math.random() < roleInfo.enemy.attack[index].probability){
            roleInfo.player.currentBlood -= roleInfo.enemy.attack[index].damage;
            this.textDisplay({upper: '成功擊中!', lower: ''});
            await this.sleep(this.state.text.upper.length*100);
        } else{
            this.textDisplay({upper: '但是失敗了...', lower: ''});
            await this.sleep(this.state.text.upper.length*100);
        }

        if(roleInfo.player.currentBlood <= 0){
            this.textDisplay({upper: '你輸了...', lower: ''});       
            return true;     
        }

        this.setState({roleInfo: roleInfo, displayState: 'control'});

        this.textDisplay({upper: '', lower: ''});
    }

    render() { 
        return ( 
            <div className = 'Fight-Main-Field'>
                <FightingDisplayArea roleInfo = {this.state.roleInfo}/>
                <FightingFooter attack = {this.state.roleInfo.player.attack} moveArrow = {this.moveArrow} 
                    arrowPosition = {this.state.arrowPosition}
                    playerExecuteAttack = {this.playerExecuteAttack}
                    text = {this.state.text}
                    displayState = {this.state.displayState} />
            </div>
         );
    }
}
 
export default Fight;