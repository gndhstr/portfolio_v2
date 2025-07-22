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
import Contact from './section/contact/contact';

import FadeInSection from './components/ui/fadeIn/fadeIn';

function App() {
  return (
    <GradientBackground>
      <div className="relative min-h-screen mb-10 scroll-smooth">
        <div id="welcome"><FadeInSection><Welcome /></FadeInSection></div>
        <div id="about"><FadeInSection><About /></FadeInSection></div>
        <div id="education"><FadeInSection><Education /></FadeInSection></div>
        <div id="experience"><FadeInSection><Experience /></FadeInSection></div>
        <div id="projects"><FadeInSection><ProjectSwitcher /></FadeInSection></div>
        <div id="certificates"><FadeInSection><ProjectNcertificate /></FadeInSection></div>
        <div id="skills"><FadeInSection><Skills /></FadeInSection></div>
        <div id="contact"><FadeInSection><Contact /></FadeInSection></div>
        <Navbar />
      </div>
    </GradientBackground>
  );
}

export default App;
