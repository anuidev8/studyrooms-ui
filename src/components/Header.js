import React from 'react';
import '../styles/header.css'

import Button from './Button'
import Brand from '../components/Brand'

const Header = () => {

    return (
        <header className="header">
          
            <nav className="menu d-flex" role="menu">
            <a className="brand" href="/">
                <Brand />
            </a>
                <ul className="menu-nav">
                      <li className="menu-nav__item"> 
                        <a className="menu-nav__link menu-nav__link--active " href="/#">inicio</a>
                      </li>
                      <li className="menu-nav__item"> 
                        <a className="menu-nav__link" href="/#">cursos</a>
                        </li>
                      <li className="menu-nav__item"> 
                         <a className="menu-nav__link" href="/#">servicios</a>
                        </li>  
                      <li className="menu-nav__item"> 
                        <a className="menu-nav__link" href="/#"> Academia</a>
                      </li>
                      <li className="menu-nav__item"> 
                        <a className="menu-nav__link" href="/#">Blog</a>
                      </li>
                 
                </ul>
                <Button title="Ingresar" />
            </nav>
        </header>
    )

}

export default Header
