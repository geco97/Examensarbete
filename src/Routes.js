import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Jack
import Login from './pages/Login';
import Register from './pages/Register';

import HomePage from './pages/HomePage';



class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/Login' component={Login} />
        <Route exact path='/Register' component={Register} />        
        <Route
          render={function() {
            return <h1>Not Found</h1>;
          }} 
        />
      </Switch>
    );
  }
}

export default Routes;
