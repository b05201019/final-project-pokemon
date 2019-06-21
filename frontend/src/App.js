import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import './containers/Home';
import './containers/Game';

function App() {
  return (
    <BrowserRouter>
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
