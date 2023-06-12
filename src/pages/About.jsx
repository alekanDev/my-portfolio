import React from 'react'
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

import '../styles/about.css'

const About = () => {
  const iconSize = 25
  return (
    <div className='aboutContent'>
      <span className='titlePage'>Sobre mi</span>
      <div className='lineTitle' />
      <p className='personalInfo'>Soy un persona con conocimientos en React, python,  javascript, html, css, nodeJS, git y github, soy muy responsable, capaz de desenvolverme en cualquier entorno y de trabajar en equipo aportando ideas creativas que mejoren los procesos, tengo experiencia en trabajar  con metodología scrum, realizando proyectos con git y github, tengo experiencia en administración de sistemas operativos linux y windows.</p>
      <div className="buttonsAbout">
        {
          
        }
        <div className="button"><IoIosArrowUp className='iconButton' size={ iconSize } /></div>
        <div className="button"><IoIosArrowDown className='iconButton' size={ iconSize } /></div>
      </div>
    </div>
  )
}

export default About