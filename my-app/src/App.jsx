import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./Home"
import Lobby from "./Lobby"
import Waiting from "./Waiting"

export default class App extends React.Component{
  render(){
    return(
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Lobby" element={<Lobby />} />
          <Route path="/Waiting" element={<Waiting />} />
        </Routes>
      </Router>
    )
  }
}
