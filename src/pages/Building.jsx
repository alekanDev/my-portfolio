import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import '../styles/App.css'

const Building = () => {
  return (
    <div className='buildingContent'>
      <span className='buildingSite'>
      <TypeAnimation
            sequence={[
              'SITIO EN CONSTRUCCION',
              2000,
              'SITIO EN PROCESO DE DESPLIEGUE',
              2000,
              'SITIO EN ELABORACION',
              2000,
              'SITIO EN PROCESO DE CREACION',
              2000,
            ]}
            repeat={ Infinity }
            wrapper='span'
          />
      </span>
    </div>
  )
}

export default Building