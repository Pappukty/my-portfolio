import React from 'react';
import './ProjectContainer.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {projectSlider} from '../../data'
import Slider from 'react-slick';
import { Button } from 'react-scroll';



const ProjectContainer = () => {
   
  return (
<div id='projects' className='projects-con'>
<h2 className='sub-title'>project</h2>
  <div className='card-container' >

<Slider>
{projectSlider.map((item => {


const {id, title, image,desc,url,github} = item;
return(

<div className='card' >project
<div className='card-top' id={1}>
<img src={image} alt={item.currencyConverter} width='200px'className='image' ></img>

        </div>
      <div className='card-bottom'>
        <h4 className='title'>{title}</h4>
        <p className='decs'>{desc}</p>
        <div className='btn-show'>
        <a className='url' href={url}>show</a>
        <a className='github' href={github}>github</a>
        </div>
      </div>

      </div>
              )
          }))} 

    
  

    </Slider>


  </div>
  </div>

  )
}

export default ProjectContainer




