import React from 'react'
import '../styles/home.css'

const Home = () => {
  return (
    <div className='homeContent'>
      <div className="homeImage" /> {/* division sin contenido */}
      <div className="infoContent">
        <span className="label textFixed fixed1">MI NOMBRE ES ALEJANDRO</span>
        <span className="label textFixed fixed2">Y SOY</span>
        <span className="label textVariable">DESARROLLADOR DE SOFTWARE</span>
        <span className="welcome1">Eres bienvenid@ a </span>
        <span className="welcome2">mi portafolio  de seguimiento personal</span>
        <div className="lineSeparate" /> {/* division sin contenido */}
        <button className="contactMe">Contactame</button>
      </div>
    </div>
  )
}

export default Home