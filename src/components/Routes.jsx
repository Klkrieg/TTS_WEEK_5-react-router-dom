import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Home } from '../Home';
import { About } from '../About';
import { Blog } from '../Blog';
import { Profile } from '../Profile';
import { Menu } from '../Menu';

export const Routes = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Route name='Home' exact path='/' component={Home} />
        <Route name='Menu' path='/menu' component={Menu} />
        <Route name='About' path='/about' component={About} />
        <Route name='Blog' path='/blog' component={Blog} />
        <Route name='Profile' path='/profile' component={Profile} />
      </div>
    </Router>
  );
};
