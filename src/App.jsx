import  React,{ useState } from 'react'
import { NavBar } from './components/NavBar'
import Home from './components/Home'
import Social from './components/Social'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experince from './components/Experince'
import Contact from './components/Contact'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <Home/>
    <About/>
    <Portfolio/>
    <Experince/>
    <Contact/>
    <Social/>
    </>
  )
}

export default App
