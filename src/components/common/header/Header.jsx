import React from 'react';
import { Navbar } from '../../common' ;
import logo from './vaccination-logo.png';
import './Header.css';

function Header () {
//φτιαχνουμε το header κανουμε Import to image Που εχουμε στον φάκελο και δηλώνουμε το navbar

  return (
    <section className="header">
      <section className="header-top">
        <section className="header-top__logo">
          <a href="/" className="header-logo">
          <img src={logo} className="logoImage" alt="Logo" />
          </a>
        </section>
        <section className="header-top__navbar">
          <section className="header-top__navigation">
            <Navbar />
          </section>
          <hr className="header-top__seperator" />
        </section>
      </section>

    </section>
  )
}

export default Header;

