import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
// import Clients from './sections/Clients.jsx';
import Projects from './sections/Projects.jsx';
import Resume from './sections/Resume.jsx';
import Accomplishments from './sections/Accomplishments.jsx';
import Experience from './sections/Experience.jsx';

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      {/* <Clients /> */}
      <Accomplishments />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
