import React from 'react'; // Added for good practice
import NavBar from './components/NavBar.jsx';
import Home from './components/Home.jsx';
import Resume from './components/Resume.jsx';
import Projects from './components/Projects.jsx';
import LabChallenges from './components/LabChallenges.jsx';
import Contact from './components/Contact.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Resume />
      <Projects />
      <LabChallenges />
      <Contact />
    </div>
  );
}

export default App;