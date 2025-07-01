import NavBar from './components/NavBar.jsx';
import Home from './components/Home.jsx';
import Resume from './components/Resume.jsx';
import Projects from './components/Projects.jsx';
import LabChallenges from './components/LabChallenges.jsx';
import Contact from './components/Contact.jsx';
import'./App.css';

function App() {
  return (
    <div className='App'>
      <Home/>
      <Resume/>
      <Projects/>
      <LabChallenges/>
      <NavBar/>
      <Contact/>
    </div>
  );
}


export default App;

