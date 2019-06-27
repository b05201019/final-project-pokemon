import React, { Component } from 'react';
//component
import Gameview from '../components/gameview';
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
            characterPositionInMap:{
                top: '0',
                left: '0',
            },
            position: {
                top: '0',
                left: '0',
            },
            noEntry:[
                {top:800,left:1000},
            ],
            currentHelth: 100,
            moving: false,
            openMenu: false,
        }
    }
    componentDidMount(){
        const moving = (e)=>{
            e.preventDefault();
            move.call(this, e);
            document.removeEventListener("keydown", moving);
            setTimeout(()=>{document.addEventListener("keydown", moving);}, 400);
        };
        document.addEventListener("keydown", moving);
        document.addEventListener("keydown", (e)=>{
            e.preventDefault();
            e.keyCode===73&&this.state.openMenu &&document.addEventListener("keydown", moving);
            open.call(this, e);
            this.state.openMenu &&document.removeEventListener("keydown", moving)
        });
        document.addEventListener("keyup", ()=>{
            this.setState({moving: false})
        })
    }
    render() { 
        console.log(this.state.moving);
        console.log(this.state.position);
        return ( 
            <div>
                <Gameview position={this.state.position} characterPositionInMap={this.state.characterPositionInMap} openMenu={this.state.openMenu}/>
            </div>
         );
    }
}
 
export default Game;