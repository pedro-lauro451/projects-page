import './App.scss';
import { HashRouter, Route, Routes} from 'react-router-dom';
import Home from './Containers/home';
import About from './Containers/about';
import Resume from './Containers/resume';
import Skills from './Containers/skills';
import Portfolio from './Containers/portfolio';
import Contact from './Containers/contact';
import Navbar from './Components/navBar';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particles from './utils.js/particles';

const handleInit = async (main) => {
    await loadFull(main)
};

function App() {

  return (
    <div className="App">
    
      <div className="App__main-page-content">
        <HashRouter>
        
        <Particles id='particles' options={particles} init={handleInit}/>
      
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
    </div>
  );
}

export default App;
