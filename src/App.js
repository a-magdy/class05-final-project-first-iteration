import React, { Component } from 'react';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar'
import Calendar from "./components/calendar/Calendar";
import MapComponent from "./components/map-component/MapComponent"
import SideBar from "./components/sidebar/sidebar";
//import logo from './logo.svg';
import Footerpage from './components/footerpage/Footerpage'
import './App.css';
const myText=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur illo quo tempora explicabo omnis mollitia ipsam, pariatur totam nam! Quibusdam error unde mollitia optio quo porro atque, obcaecati ad?Necessitatibus earum inventore mollitia doloremque, perferendisquidem, illum distinctio est quos rem fugit expedita unde amet nihil velit perspiciatis. Non, nihil?";

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
       <Navbar />
        <Calendar />
      <div>
          <MapComponent />
        <SideBar text={myText}/>
        </div>
        <Footerpage />
      </div>
    );
  }
}

export default App;
