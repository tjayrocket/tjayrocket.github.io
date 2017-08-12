import React, { Component } from 'react';
import logo from './images/TJayLetterHeadBottom.png';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="TJay-logo" alt="logo" />
          <div className="App-content-div"></div>
          <div className="App-bottom-div">
            <h2> MORE TO COME </h2>
            <h2>&copy; 2017 - T.Jay Rocket - Built using REACT.JS</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
