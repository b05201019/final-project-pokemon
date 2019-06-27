import React, { Component } from 'react'
import CharacterDetails from './menu/characterDetails';
import MiniMap from './menu/miniMap';
import PokemonDetails from './menu/pokemonDetails';
import Save from './menu/save';
import Logout from './menu/logout';

class menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            select: 0,
            openDetail: false,
        }
    }
    select = (e)=>{
        const preSelect = this.state.select
        e.preventDefault();
        switch(e.keyCode){
            case 38:
                preSelect===0||this.setState({select: preSelect-1});
                break
            case 40:
                preSelect===4||this.setState({select: preSelect+1});
                break
            default:
                return false
        }
    }

    openDetail = (e)=>{
        e.preventDefault();
        if(e.keyCode===13){
            this.setState({openDetail: !this.state.openDetail});
            this.state.openDetail?document.removeEventListener("keydown", this.select):document.addEventListener("keydown", this.select);
        }
    }
    componentDidMount(){
        document.addEventListener("keydown", this.select);
        document.addEventListener("keydown", this.openDetail);
    }
    componentWillUnmount(){
        document.removeEventListener("keydown", this.select);
        document.removeEventListener("keydown", this.openDetail);
    }
    render() {
        return (
            <div style = {menuStyle}>
                <MiniMap style={itemStyle} isSelected = {this.state.select===0} openDetail={this.state.openDetail}/>
                <CharacterDetails style={itemStyle} isSelected = {this.state.select===1} openDetail={this.state.openDetail}/>
                <PokemonDetails style={itemStyle} isSelected = {this.state.select===2} openDetail={this.state.openDetail}/>
                <Save style={itemStyle} isSelected = {this.state.select===3} openDetail={this.state.openDetail}/>
                <Logout style={itemStyle} isSelected = {this.state.select===4} openDetail={this.state.openDetail}/>
            </div>
        )
    }
}
export default menu

var menuStyle = {
    width: "250px",
    position: "absolute",
    right: "1%",
    top: "2%",
    borderRadius: "10px",
    boxSizing: "border-box",
    border: "double black 5px",
    boxShadow: "3px 3px 10px rgba(0,0,0,0.5)",
    background: "#fefefe",
    display: "flex",
    flexDirection: "column",
    justifyContent: "top",
    alignItems: "center",
    padding: "0",
}

var itemStyle = {
    display: "flex",
    justifyContent: "space-between",
    background: "#aaa",
    width: "90%",
    height: "80px",
    margin: "5% 0",
    fontSize: "1.5em",
}