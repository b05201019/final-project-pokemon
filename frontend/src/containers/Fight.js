import React, { Component } from "react";
import FightingDisplayArea from "./FightingDisplayArea";
import FightingFooter from "./FightingFooter";

class Fight extends Component {
  state = {
    displayState: "prepare"
  };

  sleep = function sleep(time) {
    return new Promise(res => setTimeout(res, time));
  };

  goToFight = () => {
    this.setState({ displayState: "control" });
  };

  goToPrepare = () => {
    this.setState({ displayState: "prepare" });
  };

  render() {
    //console.log(this.props.roleInfo);
    return (
      <div className="Fight-Main-Field">
        <FightingDisplayArea roleInfo={this.props.roleInfo} />
        <FightingFooter
          attack={this.props.roleInfo.player.attack}
          moveArrow={this.props.moveArrow}
          arrowPosition={this.props.arrowPosition}
          playerExecuteAttack={this.props.playerExecuteAttack}
          text={this.props.text}
          displayState={this.props.displayState}
          goToFight={this.goToFight}
          goToPrepare={this.goToPrepare}
          skipClass={this.props.skipClass}
        />
      </div>
    );
  }
}

export default Fight;
