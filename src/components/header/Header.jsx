import React, { useState } from "react";
import "./Header.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faBars,
  faChevronRight,
  faGlobe,
  faPlus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

export default function Header({ rutaLogo, page }) {

  const [menuSwitcher, setMenu] = useState(false);
  const [cross, showCross] = useState(false)

  const handleClickMenu = () =>{
    setMenu(true)
    showCross(page = 'Home' ?  false : true )
  }
  const handleClickNavbar = () =>{
    setMenu(false)
  }

  return (
    <>
    <header className="header">
      <div className="menu-container">
        <FontAwesomeIcon onClick={handleClickMenu} className="icon-header" icon={faBars} />
      </div>
      <div className="logo-header-container">
        <img src={rutaLogo} alt="Logo Header Words" />
      </div>
      <div className="icons-header-container shown">
        <FontAwesomeIcon className="icon-header" icon={faGlobe} />
        <FontAwesomeIcon className="icon-header" icon={faUser} />
        <FontAwesomeIcon className="icon-header" icon={faBagShopping} />
      </div>
    </header>
    <nav className={menuSwitcher ? 'menu-navbar' : 'menu-navbar hidden'} >
        <div className="menu-logo">
          <FontAwesomeIcon onClick={handleClickNavbar} className="icon-menu" icon={faXmark}/>
          <img src={rutaLogo} alt="Logo Header Words" />
        </div>
      <div className="menu-links-container">
        <div className="menu-link home">
          <p>Home</p>
          {/* Porque se carga el icono si lo que quiero es que cuando estes en la de home no enseñe  el icono */}
          <FontAwesomeIcon className={cross ? 'icon-navbar'  : 'icon-navbar plus'} icon={faPlus}/>
          <FontAwesomeIcon className={cross ? 'icon-navbar'  : 'icon-navbar chevronRight'} icon={faChevronRight}/>
        </div>
        <div className="menu-link brand">
          <p>Brand</p>
          <FontAwesomeIcon className="icon-navbar plus" icon={faPlus}/>
          <FontAwesomeIcon className="icon-navbar chevronRight" icon={faChevronRight}/>
        </div>
        <div className="menu-link cars">
          <p>Cars</p>
          <FontAwesomeIcon className="icon-navbar plus" icon={faPlus}/>
          <FontAwesomeIcon className="icon-navbar chevronRight" icon={faChevronRight}/>
        </div>
      </div>
      <div className="menu-contact-container">
      <div className="menu-contact">
          <p>Contact</p>
        </div>
      </div>
    </nav>
    </>
  );
}
