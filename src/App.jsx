import { Link, Route, Routes } from 'react-router-dom'
import { Home, About, Skills } from './components'
import './App.css'


const App = () => {

  return(
    <>
    <nav id='navbar'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/skills'>Skills</Link>
        </li>
      </ul>
    </nav>


    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/about' Component={About} />
      <Route path='/skills' Component={Skills} />
    </Routes>

    <footer id='footer'>
      <span> &copy; APS Raj 2023</span>
    </footer>

    
    </>
  )
}

export default App
