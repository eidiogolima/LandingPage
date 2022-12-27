import React from 'react'
import Logo from '../../../assets/logo.svg'
const Header = () => {
  return (
    <header className='cor-b-1 '>
      <nav className="navbar navbar-expand-md bg-light d-flex container-md-fluid container-lg p-2 justify-content-between">
        <a href="/">
          <img src={Logo} alt="" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          id="navbarSupportedContent"
          className="collapse navbar-collapse flex-grow-0"
        >
          <ul className="d-flex navbar-nav">
         

            <li className="nav-item">
              <a className="nav-link" href="/">
                Deferencial
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Duvidas Frequentes
              </a>
            </li>
            <li className="nav-item shadow">
              <a className="nav-link btn btn-primary text-white" href="/">
                CONTATO
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header