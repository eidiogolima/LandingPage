import React from 'react'
import Carrosel from '../Utilitarios/Carrosel'

import Fotos1 from '../../../assets/img/imobiliaria/1.jpg';
import Fotos2 from '../../../assets/img/imobiliaria/2.jpg';
import Fotos3 from '../../../assets/img/imobiliaria/3.jpg';

const Projetos = () => {
  return (
    <section className='cor-b-11 py-sm-6 py-4' id = "projetos">
      <div className='container-lg'>

        <h1 className='cor-1 mb-4'>RECENTES<span className='cor-p1'>.</span></h1>


        <Carrosel image1 = {Fotos1} alt1= "Imobiliária" image2 = {Fotos2} alt2 = "MotorsHibrid"  image3 = {Fotos3} alt3 = "MotorsHibrid" title = "2022 | Projetos"/>

      </div>
    </section>
  )
}

export default Projetos