import React, { useState } from "react";
import './NavBar.css';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <a href="/">GamerHub</a> {}
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
        <ul className={`nav-list ${isOpen ? "nav-active" : ""}`}>
          <li><a href="catalogo">Catálogo</a></li>
          <li><a href="News">Notícias</a></li>
          <li><a href="Acessibilidade">Acessibilidade</a></li>
          <li><a href="Sobre">Sobre</a></li>
        </ul>
      </nav>
    </header>
  );
}
