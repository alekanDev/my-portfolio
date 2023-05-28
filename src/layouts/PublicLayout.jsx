import React from 'react'
import '../styles/publicLayout.css'
import { BsGithub, BsLinkedin, BsInstagram, BsList } from "react-icons/bs";

const PublicLayout = ({ children }) => {
  return (
    <div className='publicLayoutContent'>
      <div className="navbarContent">
        <div className="navbarLogoContent">
          <div className='navbarLogo'/>
        </div>
        <div className="navbarNameContent">
          <div className="nameTitle">AlekanDev</div>
          <div className="nameSlogan">Transformando ideas en soluciones digitales.</div>
        </div>
        <div className="navbarMenu">
        <BsList size={ 32 }/>
        </div>
      </div>
      <div className="followMe ">
        <span className='textFollowMe'>Sigueme</span>
        <div className="lineFollowMe"/>
        <BsGithub className='iconFollowMe' size={ 20 } />
        <BsInstagram className='iconFollowMe' size={ 20 } />
        <BsLinkedin className='iconFollowMe' size={ 20 } />
      </div>
      <main className='mainContent'>
        { children }
      </main>
    </div>
  )
}

export default PublicLayout