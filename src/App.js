import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from "./components/dashboard/large/dashboard";
import Collapse from "./components/dashboard/compressed/collapseboard";

import Nav from "./components/navbar";


function App() {
  return (
    <div>
      <Router>
        <Nav />
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/collapse">
              <Collapse />
            </Route>
          </Switch>
      </Router>
    </div>
  );

      

 
}

export default App;
