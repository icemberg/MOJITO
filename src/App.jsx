import './App.css'
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { SplitText } from 'gsap-trial/SplitText';
import gsap from 'gsap';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Cocktails from '../components/Cocktails';
import About from '../components/About';

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {

  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
    </main>
  )
}

export default App
