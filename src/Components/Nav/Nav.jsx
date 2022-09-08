import React from 'react';
import "./Nav.css";


const Nav = () => {
  return (
    <nav className="header-area">
        <div className="header-container">
            <div className="site-logo">
                <span className="nav-name">&lt;/YG&gt;</span>
            </div>
            <div className="site-nav-menu">
                <ul className="primary-menu" style={{listStyleType: 'none'}}>
                    <li><a href="#main" className='active'>Inicio</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Proyectos</a></li>
                    <li><a href="#experience">Experiencia</a></li>
                    <li><a href="#contact">Contáctame</a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Nav