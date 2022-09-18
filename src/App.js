import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './Containers/home';
import About from './Containers/about';
import Resume from './Containers/resume';
import Skills from './Containers/skills';
import Portfolio from './Containers/portfolio';
import Contact from './Containers/contact';
import Navbar from './Components/navBar';

function App() {
  return (
    <div>
      {/*particles js*/}

      {/*navbar*/}

      {/*main page content*/}

      <HashRouter>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/about' exact element={<About/>} />
          <Route path='/resume' element={<Resume/>} />
          <Route path='/skills' element={<Skills/>} />
          <Route path='/portfolio' element={<Portfolio/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </HashRouter> 
    </div>
  );
}

export default App;
