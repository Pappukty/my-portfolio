import React from 'react';



import './Header.css'
const Header = () =>{
  return(
    
    <div className='header'> 
      <div className='header__left'>
        <h1>De<span>ve</span>lop<span>er</span></h1>
      </div>

<div className='header__right'>
<span className='nav'>
<a href='#about' className='about'>About</a>
</span>
<span className='nav'>
<a href='#skills' className='skills'>Skills</a>
</span>
<span className='nav'>
<a href ='#projects' className='projects'>projects</a>
</span>

<span className='nav'>
<a href = '#contact' className='contact'>contact</a>
</span>



</div>

</div>
);
};

export default Header
