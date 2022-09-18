import { Routes, Route } from 'react-router-dom';
import Home from './Containers/home';
import About from './Containers/about';
import Resume from './Containers/resume';
import Skills from './Containers/skills';
import Portfolio from './Containers/portfolio';
import Contact from './Containers/contact';

function App() {
  return (
    <div>
      {/*particles js*/}

      {/*navbar*/}

      {/*main page content*/}

      <Routes>
        <Route path='/projects-page' element={<Home/>} />
        <Route path='/projects-page/about' element={<About/>} />
        <Route path='/projects-page/resume' element={<Resume/>} />
        <Route path='/projects-page/skills' element={<Skills/>} />
        <Route path='/projects-page/portfolio' element={<Portfolio/>} />
        <Route path='/projects-page/contact' element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
