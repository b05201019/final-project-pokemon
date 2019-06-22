import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import Game from './containers/Game';
import Fight from './containers/Fight';

function App() {
  return (
    <BrowserRouter>
      <div className = "App">
        <Switch>
          <Route path = "/Home" component = {Home}></Route>
          <Route path = "/Game" component = {Game}></Route>
          <Route path = "/Fight" component = {Fight}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
