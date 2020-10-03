import React from 'react';
import './App.css';
import Home from "./routes/Home"
import Todo from "./routes/Todo"
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path = "/" exact>
          <Home />
          </Route>
          <Route path = "/Todo">
            <Todo />
          </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
