import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import Game from './containers/Game';

function App() {
  return (
    <BrowserRouter>
    <Game />
      <div className = "App">
        <Switch>
          <Route path = "/Home" components = {Home}></Route>
          <Route path = "/Game" components = {Game}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
