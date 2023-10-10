import React from 'react'
import './Contact.css'
import { FaBeer } from "react-icons/fa";
import{AiTwotoneMail} from 'react-icons/ai';
import{AiFillPhone} from 'react-icons/ai';
import{BiSolidLocationPlus} from 'react-icons/bi';
import{AiFillInstagram} from 'react-icons/ai';
import{AiFillLinkedin} from 'react-icons/ai';
import{AiFillGithub} from 'react-icons/ai';
const Contact = () => {
  return (

<div className='container' id='contact'>

<div className='contact-con'>
<h2 className='contact-title'>Footer</h2>
<div className='footer-details'>
<h3 className='name'>Ajay</h3>
<p className='position'>web developer</p>
      <span className='email'><AiTwotoneMail/>
  aju53581@gmail.com</span>
  <span className='number'><AiFillPhone/>+8189993884
  </span>
  <span className='location'><BiSolidLocationPlus/>
    tiruppur</span>
   
      <div className='logo'>
<a href='https://www.linkedin.com/in/ajay-k-4a2895283/' className='logo-container'>
<AiFillLinkedin/>
</a>
<a href='https://github.com/Pappukty' className='logo-container'>
<AiFillGithub/>
</a>
</div>
</div>

      </div>
      </div>
    
  )
}

export default Contact
