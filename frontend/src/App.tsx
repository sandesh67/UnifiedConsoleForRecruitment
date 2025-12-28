import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import RecruitmentDashBoard from './RecruitmentDashBoard';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CreateRecruit from './createRecruiter';
import UnifiedPortalForRecruitment from './UnifiedPortalForRecruitment';
import EditRecruiter from './EditRecruiter';


function App() {

  

  return (
      <div className="App">
        <header className="App-header">
          <Router>
          <h1>Unified Recruitment Console</h1> 
           <nav style={{ margin: "20px" }}>
                  <Link to="/">Home</Link>
                  <Link to="/recruiters">Recruiters</Link>
                  <Link to="/createRecruiter">Create Recruiter </Link>
                  </nav>
          <Routes>
        <Route path="/" element={<UnifiedPortalForRecruitment/>} />
        <Route
  path="/recruiters"
  element={
      <RecruitmentDashBoard />
  }
/>

<Route
  path="/createRecruiter"
  element={
      <CreateRecruit />
  }
/>

<Route
  path="/edit/:id"
  element={
      <EditRecruiter />
  }
/>
      </Routes>
          </Router>
        </header>
      </div>
    
  );
}

export default App;
