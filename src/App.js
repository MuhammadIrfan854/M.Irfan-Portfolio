import About from './components/about/About';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Skills from './components/skills/Skills';
import { useEffect } from 'react';
 import AOS from 'aos';
 import 'aos/dist/aos.css';
function App() {
   useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
   <>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
   </>
  );
}

export default App;
