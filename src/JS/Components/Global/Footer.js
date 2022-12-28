import React from 'react'
import Logo from '../../../assets/logo-white.svg'
const Footer = () => {
  return (
    <footer className='cor-b-12 py-sm-6 py-4'>
        <div className='container'>
          <div className='d-md-flex row d-grid'>
            <div className='col'>
              <a href="#home"><img width ='187px' height='23px'  src={Logo} alt="" /></a>
              
            </div>

            <div className='col mt-4 mt-md-0'>
              <h4 className='cor-2'>Menu</h4>
              <ul className=''>
                <li className='cor-4 p-2 '><a href="#home">inicio</a></li>
                <li className='cor-4 p-2'><a href="#projetos">Projetos</a></li>
              </ul>
            </div>    

            <div className='col mt-4 mt-md-0'>
              <h4 className='cor-2'>Contato</h4>
              <ul className=''>
                <li className='cor-4 p-2'><a target="_blank"rel="noreferrer noopener" href="https://wa.me/5511915647291">+55 11 91564-7291</a></li>
                <li className='cor-4 p-2'><a target="_blank"rel="noreferrer noopener" href="mailto:eidiogoadm@gmail.com">eidiogoadm@gmail.com</a></li>
                <li className='cor-p1 p-2'><a target="_blank"rel="noreferrer noopener" href="https://wa.me/5511915647291">solicitar orçamento</a></li>

              </ul>
            </div>    

            <div className='col mt-4 mt-md-0'>
              <h4 className='cor-2'>Dúvidas</h4>
              <ul className=''>
                <li className='cor-4 p-2'><a target="_blank"rel="noreferrer noopener" href="https://wa.me/5511915647291">Restou dúvida? entre em contato clicando <span className='cor-p1'>aqui</span> </a></li>
              

              </ul>
            </div>    
          </div>
        </div>
    </footer>
  )
}

export default Footer