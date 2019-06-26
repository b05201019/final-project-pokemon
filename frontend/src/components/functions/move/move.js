
async function move(e){
    // e.preventDefault();
    const position = this.state.position;
            switch(e.keyCode){
                case 37:
                    const noEntryLeft = this.state.noEntry.some((item)=>{
                       return item.left === (parseInt(position.left)+50);
                    });
                    if(noEntryLeft) break;
                    this.setState({position:{
                        top: position.top,
                        left: (parseInt(position.left)+50).toString(),
                    }})
                    break;
                case 38:
                    const noEntryTop = this.state.noEntry.some((item)=>{
                        return item.top === (parseInt(position.top)+50);
                    });
                    if(noEntryTop) break;
                    this.setState({position:{
                        top: (parseInt(position.top)+50).toString(),
                        left: position.left,
                    }})
                    break;
                case 39:
                    const noEntryRight = this.state.noEntry.some((item)=>{
                        return item.left === (parseInt(position.left)-50);
                    });
                    if(noEntryRight) break;
                    this.setState({position:{
                        top: position.top,
                        left: (parseInt(position.left)-50).toString(),
                    }})
                    break;
                case 40:
                    const noEntryDown = this.state.noEntry.some((item)=>{
                        return item.top === (parseInt(position.top)-50);
                     });
                     if(noEntryDown) break;
                    this.setState({position:{
                        top: (parseInt(position.top)-50).toString(),
                        left: position.left,
                    }})
                    break;
                default:
                    break;
               }
        this.setState({moving: true});
}


export default move