import './App.css';
import About from './Compnent/About/About';
import Contact from './Compnent/Contact/Contact';
import Experience from './Compnent/Experience/Experience';
import Hero from './Compnent/Hero/Hero';
import Navbar from './Compnent/Navbar/Navbar';
import Project from './Compnent/Project/Project';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <About />
        <Experience/>
        <Project/>
        <Contact/>
    </div>
  );
}

export default App;
