import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/publicLayout.css'
import { BsGithub, BsLinkedin, BsInstagram, BsList, BsXLg } from "react-icons/bs";
import { BsHouse, BsColumns, BsClipboard2Data, BsInfoCircle, BsMailbox } from "react-icons/bs";
import { signal } from '@preact/signals-react'

const menuView = signal('hidden')

const PublicLayout = ({ children }) => {
  const location = useLocation()
  const navigate = useNavigate()

  //#region listItems
  const sizeIcon = 25
  const listItems = [
    {
      name: 'Inicio', 
      icon: <BsHouse className='iconRoute' size={ sizeIcon } />,
      route: '/'
    },
    {
      name: 'Portafolio', 
      icon: <BsColumns className='iconRoute' size={ sizeIcon } />,
      route: '/portfolio'
    },
    {
      name: 'Blog', 
      icon: <BsClipboard2Data className='iconRoute' size={ sizeIcon } />,
      route: '/blog'
    },
    {
      name: 'Sobre mi', 
      icon: <BsInfoCircle className='iconRoute' size={ sizeIcon } />,
      route: '/about'
    },
    {
      name: 'Contacto', 
      icon: <BsMailbox className='iconRoute' size={ sizeIcon } />,
      route: '/contact'
    }
  ]
  //#endregion

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
        <ul className='fullMenu'>
          {
            listItems.map((el, index) =>{
              if(location.pathname !== el.route){
                return (
                  <li key={ index } className='itemMenu' onClick={ () => {
                    navigate(`${ el.route }`)
                  }}><span className="nameRoute"> { el.name } </span> </li>
                )
              } else {
                return (
                  <li key={ index } className='itemMenu itemMenuSelect' onClick={ () => {
                    navigate(`${ el.route }`)
                  }}><span className="nameRoute"> { el.name } </span> </li>
                )
              }
            }) 
          }
        </ul>
        <div className="navbarMenu">
          <BsList size={ 32 } onClick={ () => {
            menuView.value ='menuContent'
            }}  /> {/* boton menu */}
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
      <menu className={ menuView }> {/**menuContent */}
        <BsXLg className='btnCloseMenu' size={ 32 } onClick={ () => {
          menuView.value='hidden'
        }} />
        <div className="lineClose" /> {/* division sin contenido */}
        <div className="boxMenu">
          <ul className='listRoutes'>
            {
              listItems.map((el, index) =>{
                if(location.pathname !== el.route){
                  return (
                    <li key={ index } className='listRoute' onClick={ () => {
                      menuView.value='hidden'
                      navigate(`${ el.route }`)
                    }}> { el.icon } <span className="nameRoute"> { el.name } </span> </li>
                  )
                }
              }) 
            }
          </ul>
        </div>
      </menu>
    </div>
  )
}

export default PublicLayout