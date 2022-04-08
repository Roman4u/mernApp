import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Users from "./user/pages/Users.js";
import NewPlace from './places/pages/newPlaces.js';


//App.js is the component that is rendered to the DOM
function App() {
  return <Router>
    <Switch>
    <Route path="/" exact>
      <Users />

    </Route>

    <Route path="/places/new" exact>
      <NewPlace />
    </Route>

    <Redirect to="/" />
    </Switch>
  </Router>;
}

export default App;
