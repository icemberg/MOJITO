import './App.css'
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { SplitText } from 'gsap-trial/SplitText';
import gsap from 'gsap';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {

  return (
    <main>
      <Navbar />
      <Hero />
      <div className="h-dvh bg-black" />
    </main>
  )
}

export default App
