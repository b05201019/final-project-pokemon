function move(e){
    // e.preventDefault();
    const position = this.state.position;
    var enemyPosition = this.state.map.enemy.map(item=>{
        return {top:this.state.character.characterPositionInMap.top-item.position.top, left:this.state.character.characterPositionInMap.left-item.position.left}
    })
    var noEntry = this.state.map.noEntry.concat(enemyPosition);
    var noEntryOtherSide = false;

    
    if(!this.state.character.moving&&this.state.character.characterFacing.right){
        console.log("move right");
    }
    
}


export default move