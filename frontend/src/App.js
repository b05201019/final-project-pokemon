<<<<<<< HEAD
import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Game from "./containers/Game";
import Fight from "./containers/Fight";
=======
import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import Game from './containers/Game';
>>>>>>> 6de7f4b748cccfbfe191a91c36c4a316bb52255c

function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <div className="App">
=======
    <Game />
      <div className = "App">
>>>>>>> 6de7f4b748cccfbfe191a91c36c4a316bb52255c
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users/login" component={Login} />
          <Route exact path="/users/register" component={Register} />
          <Route exact path="/Game" component={Game} />
          <Route exact path="/Fight" component={Fight} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
