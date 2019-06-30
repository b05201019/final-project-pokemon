import React, { Component, Fragment } from "react";
import CharacterDetails from "./menu/characterDetails";
import MiniMap from "./menu/miniMap";
import Bag from "./menu/Bag";
import Save from "./menu/save";
import Logout from "./menu/logout";
import BagView from "../components/BagView";

class menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: 0,
      openDetail: false,
      openBag: false,
      bagSelect: 0
    };
  }
  select = e => {
    const preSelect = this.state.select;
    const preBagSelect = this.state.bagSelect;
    e.preventDefault();
    if (!this.state.openBag) {
      switch (e.keyCode) {
        case 38:
          preSelect === 0 || this.setState({ select: preSelect - 1 });
          break;
        case 40:
          preSelect === 4 || this.setState({ select: preSelect + 1 });
          break;
        default:
          return false;
      }
    } else {
      switch (e.keyCode) {
        case 38:
          preBagSelect === 0 || this.setState({ bagSelect: preBagSelect - 1 });
          break;
        case 40:
          preBagSelect === 2 || this.setState({ bagSelect: preBagSelect + 1 });
          break;
        default:
          return false;
      }
    }
    console.log(this.state.bagSelect);
  };

  openDetail = e => {
    e.preventDefault();
    if (e.keyCode === 13) {
      this.setState({ openDetail: !this.state.openDetail });
      this.state.openDetail && !this.state.openBag
        ? document.removeEventListener("keydown", this.select)
        : document.addEventListener("keydown", this.select);
      if (
        e.keyCode === 13 &&
        this.state.openBag &&
        this.state.bagSelect === 2
      ) {
        this.setState({ openBag: false });
      }
    }
  };
  componentDidMount() {
    document.addEventListener("keydown", this.select);
    document.addEventListener("keydown", this.openDetail);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.select);
    document.removeEventListener("keydown", this.openDetail);
  }

  openBag = () => {
    this.setState({ openBag: true });
  };

  render() {
    return (
      <div style={menuStyle}>
        {this.state.openBag ? (
          <BagView
            bagUse={this.props.bagUse}
            character={this.props.character}
            bagSelect={this.state.bagSelect}
          />
        ) : (
          <Fragment>
            <MiniMap
              style={itemStyle}
              isSelected={this.state.select === 0}
              openDetail={this.state.openDetail}
            />
            <CharacterDetails
              style={itemStyle}
              isSelected={this.state.select === 1}
              openDetail={this.state.openDetail}
            />
            <Bag
              style={itemStyle}
              isSelected={this.state.select === 2}
              openDetail={this.state.openDetail}
              openBag={this.openBag}
            />
            <Save
              style={itemStyle}
              isSelected={this.state.select === 3}
              openDetail={this.state.openDetail}
              Data={this.props.Data}
            />
            <Logout
              style={itemStyle}
              isSelected={this.state.select === 4}
              openDetail={this.state.openDetail}
            />
          </Fragment>
        )}
      </div>
    );
  }
}
export default menu;

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
  padding: "0"
};

var itemStyle = {
  display: "flex",
  justifyContent: "space-between",
  background: "#aaa",
  width: "90%",
  height: "80px",
  margin: "5% 0",
  fontSize: "1.5em"
};
