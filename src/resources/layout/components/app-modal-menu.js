import React from 'react';
import './app-modal-menu.css';
import { createPortal } from 'react-dom';
// route
import { NavLink } from 'react-router-dom';

const closeModalMenu = () => {
  document.getElementById("app-modal-menu").classList.remove("app-modal-menu-visible");
}

const AppModalMenu = () => {
  return createPortal(
    <div className="app-modal-menu" id="app-modal-menu" onClick={() => closeModalMenu()}>
      <ul>
        <li><NavLink exact to="/" activeClassName="app-modal-menu-li-active"><i className="fas fa-code"></i>&nbsp;&nbsp; Inicio</NavLink></li>
        <li><NavLink to="/blog" activeClassName="app-modal-menu-li-active"><i className="fas fa-newspaper"></i>&nbsp;&nbsp;Blog</NavLink></li>
        <li><NavLink to="/info" activeClassName="app-modal-menu-li-active"><i className="fas fa-info"></i>&nbsp;&nbsp; Info</NavLink></li>
      </ul>
    </div>,
    document.getElementById("modal-menu"))
};

export default AppModalMenu;