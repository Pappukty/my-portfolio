
import React from 'react'

import "./SkillsContainer.css";
import  LinearProgress from '@mui/material/LinearProgress'

import html from "../../images/html.png"
import css from '../../images/css.png'
import javascript from '../../images/javascript.png'
import react from '../../images/react.png'
import bootstrap from '../../images/bootstrap.png'
import nodejs from '../../images/node.js.png'
import skills from '../../images/skills.jpg'
import {review}from '../../data'




const SkillsContainer = () => {

  return (
    <div className='skillContainer' id='skills'>
{/* 

  {review.map((item => {
      
    
  const {id, name, image} = item;
return(


          )
      }))} */}
    <div className='image-container'>
<img src={skills} alt='skills' className='image-container'width= '250px'></img>
    </div>
        
      
<div className='skillContainer_text' id='skills'>
      <h2>SkillsList</h2>
<div className='skillContainer_skillSet'>
    
<h3>React</h3>
<div className='skillContainer_slider skillContainer_slider1'>
<LinearProgress variant='determinate' value={90}/>
      </div>
    </div>
    <div className='skillContainer_skillSet'>
<h3>HTML</h3>
<div className='skillContainer_slider skillContainer_slider2'>
<LinearProgress variant='determinate' value={70}/>
      </div>
    </div>
    <div className='skillContainer_skillSet'>
<h3>CSS</h3>
<div className='skillContainer_slider skillContainer_slider3'>
<LinearProgress variant='determinate' value={80}/>
</div>
    </div>
    <div className='skillContainer_skillSet'>
<h3>Javascript</h3>
<div className='skillContainer_slider skillContainer_slider4'>
<LinearProgress variant='determinate' value={80}/>
      </div>
    </div>

    </div>
    
<div className='skills-logo_container'>


        <section className='html-container'>
 <img src={html} alt='html'className='html_logo'></img>

 </section>
<div className='logo-image'>
<section className='css_container' >
<img src={css} alt='css'className='css_logo'></img>
    </section>
    <section className='javascript'>
    <img src={javascript} alt='javascript'className='javascript_logo'></img>
    </section>
    <section className='react_container'>
    <img src={react} alt='react'className='react_logo'></img>
    </section>
    <section className='bootstrap-container'>
     <img src={bootstrap} alt='bootstrap'className='bootstrap_logo' width='100px'></img>
    </section>
    <section className='node.js-container'>
    <img src={nodejs} alt='node.js'className='node.js_logo' width= '100px'></img>

    <h2 className='hello'></h2>
    <h3></h3>
    </section>
    </div>
    </div>
    
    </div>
  )
}

export default  SkillsContainer;






