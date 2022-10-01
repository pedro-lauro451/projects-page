import './App.scss';
import { HashRouter, Route, Routes} from 'react-router-dom';
import Home from './Containers/home';
import About from './Containers/about';
import Resume from './Containers/resume';
import Skills from './Containers/skills';
import Portfolio from './Containers/portfolio';
//import Contact from './Containers/contact';
import Navbar from './Components/navBar';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particles from './utils.js/particles';
import { useState } from 'react';

import { 
        homeContentEng, 
        homeContentPort,
        aboutContentEng,
        aboutContentPort,
        resumeContent,
        resumeContentPort,
        skillsContent,
        skillsPort,
        projectsContent,
        projectsPort } from './utils.js/content';

const handleInit = async (main) => {
    await loadFull(main)
};

function App() {

  const [toggleLangIcon, setToggleLangIcon] = useState(false);

  const handleToggleIcon = langToggle => {
    setToggleLangIcon(langToggle);
    console.log(toggleLangIcon);
};

  return (
    <div className="App">
    
      <div className="App__main-page-content">
        <HashRouter>
        
        <Particles id='particles' options={particles} init={handleInit}/>
      
        <Navbar onLangToggle={handleToggleIcon}/>
        <Routes>
          <Route path='/' exact element={toggleLangIcon ? 
          <Home contentProp={homeContentPort}/> : 
          <Home contentProp={homeContentEng}/>} />
          
          <Route path='/about' exact element={toggleLangIcon ?  
          <About AboutContentProp={aboutContentPort}/> : 
          <About AboutContentProp={aboutContentEng}/>} />

          <Route path='/resume' element={toggleLangIcon ? 
          <Resume resumeContentProp={resumeContentPort} toggled={toggleLangIcon}/> : 
          <Resume resumeContentProp={resumeContent} toggled={toggleLangIcon}/>} />

          <Route path='/skills' element={toggleLangIcon ? 
          <Skills skillsContentProp={skillsPort}/> : 
          <Skills skillsContentProp={skillsContent}/>} />

          <Route path='/portfolio' element={toggleLangIcon ? 
          <Portfolio projectsContentProp={projectsPort} toggled={toggleLangIcon}/> : 
          <Portfolio projectsContentProp={projectsContent} toggled={toggleLangIcon}/>} />

          {/* <Route path='/contact' element={<Contact/>} /> */}
        </Routes>
      </HashRouter> 
      </div>
    </div>
  );
}

export default App;
