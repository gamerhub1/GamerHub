import React, { useState } from "react";
import './NavBar.css';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false); // Controla o estado do menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Alterna o menu aberto ou fechado
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <a href="/">GamerHub</a> {/* Logo agora é clicável */}
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
