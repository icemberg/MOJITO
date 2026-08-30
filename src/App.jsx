import './App.css'
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { SplitText } from 'gsap-trial/SplitText';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {

  return (
    <>
      <div className='flex-center h-[100vh]'>
        <h1 className='text-3xl text-indigo-300'>Hello World!</h1>
      </div>
    </>
  )
}

export default App
