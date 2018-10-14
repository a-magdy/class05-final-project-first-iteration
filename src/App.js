import React, { Component } from 'react';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar'
import Calendar from "./components/calendar/Calendar";
import MapComponent from "./components/map-component/MapComponent"
//import logo from './logo.svg';
import Footerpage from './components/footerpage/Footerpage'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
       <Navbar />
        <Calendar />
        <div>
          <MapComponent />
        </div>
        <Footerpage />
      </div>
    );
  }
}

export default App;
