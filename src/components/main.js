  
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import guidance from './guidance';
import Links from './Links';
import Test from './Test';
import Info from './Info';


const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/Home" component={Home} />
    <Route path="/Info" component={Info} />
    <Route path="/Test" component={Test} />
    <Route path="/Links" component={Links} /> 
  </Switch>
)

export default Main;


