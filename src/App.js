import React from "react";
import { useState } from "react";
import "./App.css";
import "./index.css";
import Header from "./components/Header";
import TopContainer from "./components/Top-container/TopContainer";
import SkillContainer from "./components/Skills-Container/SkillsContainer";
import ProjectContainer from "./components/Project/ProjectContainer";
import Contact from "./components/Contact/Contact";
import About from "./components/Top-container/About-content/About";
import Skills from "./components/skills/skills";
import { BsFillMoonFill } from "react-icons/bs";
import { BiSun } from "react-icons/bi";

const App = () => {
  const [islight, setLight] = useState("false");
  return (
    <div className="darkTheme">
      <Header />
      <TopContainer />
      <About />
      <Skills />
      <SkillContainer />
      <ProjectContainer />
      <Contact />
    </div>
  );
};

export default App;

//  export default App;
// import   React from 'react'
// import { useState } from 'react'
// import './App.css'
// import './index.css'
// import Header from './components/Header'
// import TopContainer from './components/Top-container/TopContainer'
// import SkillContainer from './components/Skills-Container/SkillsContainer'
// import ProjectContainer from './components/Project/ProjectContainer'
// import Contact from './components/Contact/Contact'
// import About from './components/Top-container/About-content/About'
// import {BsFillMoonFill} from 'react-icons/bs'
// import { BiSun } from 'react-icons/bi'
//  import  projectSlider from './data'
// import ReactSwitch from 'react-switch'

// import { createContext } from 'react'

// export const ThemeContext = createContext('null')
// function App  () {
//   const [theme, setTheme] =useState('light')
//   const toggleTheme=()=>{
//   setTheme((curr)=>(curr === 'light' ? 'dark' :  'light'));
//   };
//   return (

// <ThemeContext.Provider value={{theme,toggleTheme}}>

//     <div className='App' id={theme}>
//       <div className='switch'>
//         <label >{theme === 'light' ? 'light Mode':  'Dark mode'}</label>
//       <BiSun className='slm'/>
//       <BsFillMoonFill className='slm'/>
//       <ReactSwitch onChange={toggleTheme} checked={theme === 'light'} />
//       </div>

// <Header

// />

//       <TopContainer/>
//       <SkillContainer/>
//     <ProjectContainer/>
//     <Contact/>
//     <About/>
// </div>
//     </ThemeContext.Provider>
//   )
// }

// export default App
