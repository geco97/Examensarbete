import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Jack
import Login from './pages/Login';
import Register from './pages/Register';
import profile from './pages/profile';

import HomePage from './pages/HomePage';
import Salon from './pages/Salon';
import SalonPage from './pages/SalonPage'



class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/Login' component={Login} />
        <Route exact path='/Register' component={Register} /> 
        <Route exact path='/Section1' component={HomePage} /> 
        <Route exact path='/Section2' component={HomePage} /> 
        <Route exact path='/Section3' component={HomePage} />       
        <Route exact path='/profile/:id' component={profile} /> 
        <Route exact path='/Salons' component={Salon} /> 
        <Route exact path='/Salon/:id' component={SalonPage} /> 
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
