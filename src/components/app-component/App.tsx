import React, { Component } from 'react';
import './App.scss';

import {Board} from '../index';

// import logo from './../../assets/svg/logo.svg'
// const logo = require('./../../assets/svg/logo.svg') as string;
// const logo = require("./logo.svg") as string;

// import {logo} from '@assets/svg/logo';

// const logo = require('./../../assets/svg/logo.svg');
// src={logo}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board />


        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}


      </div>
    );
  }
}

export default App;
