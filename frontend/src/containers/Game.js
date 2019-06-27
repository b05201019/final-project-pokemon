import React, { Component } from 'react';
//component
import Gameview from '../components/game/gameview';
// function
// import moveLeft from '../components/functions/move/moveLeft';
// import moveRight from '../components/functions/move/moveRight';
// import moveTop from '../components/functions/move/moveTop';
// import moveDown from '../components/functions/move/moveDown';
import move from '../components/functions/move/move';
import open from '../components/functions/openMenu';



class Game extends Component {
    constructor(props){
        super(props);
        this.state = {
            character:{
                characterPositionInMap:{
                    top: 350,
                    left: 500,
                },
                characterFacing:{
                    top: true,
                    down: false,
                    left: false,
                    right: false,
                },
                moving: false,
                preMove: 38,
            },
            position: {
                top: '0',
                left: '0',
            },
            map: {
                name: "1",
                noEntry: [
                    {top:800,left:1000},
                ],
                enemy: [
                    {name:"ric", position:{top:500, left:500}},
                ]
            },
            openMenu: false,
        }
    }
    moving = (e)=>{
        e.preventDefault();
        this.turing(e);
        move.call(this, e);
        this.setState({character:{...this.state.character, preMove: e.keyCode}});
        document.removeEventListener("keydown", this.moving);
        setTimeout(()=>{document.addEventListener("keydown", this.moving);}, 200);
    };

    turing = (e)=>{
        e.preventDefault();
            switch(e.keyCode){
                case 37: this.setState({character:{...this.state.character, characterFacing:{top:false, down:false, left:true,  right:false}}}); break;
                case 38: this.setState({character:{...this.state.character, characterFacing:{top:true,  down:false, left:false, right:false}}}); break;
                case 39: this.setState({character:{...this.state.character, characterFacing:{top:false, down:false, left:false, right:true }}}); break;
                case 40: this.setState({character:{...this.state.character, characterFacing:{top:false, down:true,  left:false, right:false}}}); break;
                default: break;
            };
        console.log(this.state.character.characterFacing);
    }

    openMenu = (e)=>{
        e.preventDefault();
        e.keyCode===73&&this.state.openMenu &&document.addEventListener("keydown", this.moving);
        open.call(this, e);
        this.state.openMenu &&document.removeEventListener("keydown", this.moving);
    };

    letsBattle = (e)=>{
        e.preventDefault();
        const facing = this.state.character.characterFacing;
        const top = parseInt(this.state.position.top);
        const left = parseInt(this.state.position.left);
        const enemyTop = this.state.character.characterPositionInMap.top-this.state.map.enemy[0].position.top;
        const enemyLeft = this.state.character.characterPositionInMap.left-this.state.map.enemy[0].position.left;
        if(e.keyCode===32){
            console.log("!!")
            if(top===enemyTop+50&&left===enemyLeft&&facing.down) console.log("you meet enemy downward!");
            if(top===enemyTop-50&&left===enemyLeft&&facing.top) console.log("you meet enemy upward!");
            if(top===enemyTop&&left===enemyLeft-50&&facing.left) console.log("you meet enemy leftside!");
            if(top===enemyTop&&left===enemyLeft+50&&facing.right) console.log("you meet enemy rightside!");
        }
    }

    componentDidMount(){
        document.addEventListener("keydown", this.moving);
        document.addEventListener("keydown", this.openMenu);
        document.addEventListener("keyup", ()=>{this.setState({moving: false})});
        document.addEventListener("keydown", this.letsBattle)
    }
    render() { 
        // console.log(this.state.moving);
        console.log(this.state.position);
        return ( 
            <div>
                <Gameview 
                    position={this.state.position}
                    character={this.state.character}
                    openMenu={this.state.openMenu}
                    map={this.state.map}
                />
            </div>
         );
    }
}
 
export default Game;