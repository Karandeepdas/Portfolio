import './App.css'
import Navbar from './Components/Navbar'
import Skills from './Components/Skills'
import About from './Components/About'
import Project from './Components/Projects'
import Contact from './Components/Contact'
function App() {

  return (
    <>
      <Navbar></Navbar>
      <section id="about" className='w-full'>
         <About/>
      </section>
      <section id='skills' className='w-full flex flex-col gap-1 justify-center mt-4'>
        <h1 className='text-center text-white text-4xl font-extrabold'>Skills/Tools</h1>
        <Skills/>
      </section>
      <section id='projects' className='w-full flex flex-col gap-3 justify-center mx-2'>
         <h1 className='text-center text-white text-4xl font-extrabold'>Projects</h1>
        <Project/>
      </section>
      <section id='contacts' className='w-full flex flex-col gap-3 justify-center mt-5'>
        <h1 className='text-center text-white text-4xl font-extrabold'>Get In Touch</h1>
        <Contact/>
      </section>
      <hr className="h-px my-4 bg-white border-0"></hr>
      <h1 className='text-white w-full text-center my-1'>©2025 Karan Deep. All rights reserved.</h1>
    </>
  )
}

export default App
