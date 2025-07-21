import './App.css';
import Welcome from './section/welcome/welcome';
import About from './section/about/about';
import Navbar from './components/navbar/nav';
import GradientBackground from './components/ui/background/background';
import Experience from './section/experience/experience';
import Skills from './section/skills/skills';
import ProjectSwitcher from './components/ui/projectSwitcher/projectSwitcher';
import ProjectNcertificate from './section/projectNcertificate/projectNcertificate';
import Education from './section/education/education';

function App() {
  return (
    <>
    <GradientBackground>
      <div className="relative z-10 min-h-screen">
        <Welcome/>
        <About/>
        <Education/>
        <Experience/>
        <Navbar/>
        <ProjectSwitcher/>
        <ProjectNcertificate/>
        <Skills/>
      </div>
    </GradientBackground>
    </>
  );
}

export default App;
