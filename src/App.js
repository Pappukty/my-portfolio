

// export default App;
import   React from 'react'
import './App.css'
import Header from './components/Header'
import TopContainer from './components/Top-container/TopContainer'
import SkillContainer from './components/Skills-Container/SkillsContainer'
import ProjectContainer from './components/Project/ProjectContainer'
import Contact from './components/Contact/Contact'
import About from './components/Top-container/About-content/About'
// import  projectSlider from './data'



function App  () {
  
  return (
    <div>
      
      
     
      <Header/>
      <TopContainer/>
      <SkillContainer/> 
    <ProjectContainer/>
    <Contact/>
    <About/>
    

  
  
    

    </div>
  )
}

export default App
