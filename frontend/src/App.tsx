import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import RecruitmentDashBoard from './RecruitmentDashBoard';

function App() {

  

  return (
    <div className="App">
      <header className="App-header">
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
        <RecruitmentDashBoard/>
      </header>
      
    </div>
  );
}

export default App;
