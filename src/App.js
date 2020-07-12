import React from 'react';
import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Activity from './pages/Activity';
import Error from './pages/Error';
import {Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/activity" component={Activity} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
