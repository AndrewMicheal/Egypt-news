import './App.css';
import React, { Component } from 'react';
import Navbar from './Component/Navbar/Navbar.jsx';
import Home from './Component/Home/Home.jsx';
import General from './Component/General/General.jsx';
import Sports from './Component/Sports/Sports.jsx';
import { Switch , Route , Redirect } from 'react-router-dom';
import notfound from './Component/NotFound/notfound.jsx';
import Business from './Component/Business/Business.jsx';
import Health from './Component/Health/Health.jsx';
import Technology from './Component/Technology/Technology';
import Covid from './Component/Covid/covid';
import Footer from './Component/Footer/Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Home/>
        <Switch>
          <Route path = "/general" component = {General}/>
          <Route path = "/sports" component = {Sports}/>
          <Route path = "/business" component = {Business}/>
          <Route path = "/health" component = {Health}/>
          <Route path  = "/technology" component = {Technology}/>
          <Route path = "/notfound" component = {notfound}/>
          <Route path = "/" exact component = {General}/>
          <Redirect to = "/notfound"/>
        </Switch>
        <Covid/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;