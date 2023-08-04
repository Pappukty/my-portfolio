import React from 'react'
import './TopContainer.css'
import { Element } from 'react-scroll'
import TopContent from './Top-content/TopContent'
const TopContainer = () => {
  return (
<Element name='about' className='topContainer'>
    <h1></h1>
    <TopContent/>
</Element>
  )
}

export default TopContainer;
