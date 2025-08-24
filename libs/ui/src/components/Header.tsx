import React, { useState } from "react";
import "../styles/Header.scss";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

interface Item {
  label: string;
  path: string;
}

interface Props {
  title: string;
  nav: Item[];
}

export const Header: React.FC<Props> = ({ title, nav }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className={`header ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
      {/* Titre */}
      <div className="header__title">
        <h1>{title}</h1>
      </div>

      {/* Bouton hamburger (mobile uniquement) */}
      <button 
        className="header__mobile-toggle"
        onClick={toggleMobileMenu}
        aria-label="Toggle navigation menu"
      >
        <Bars3Icon className="header__hamburger-icon" />
        <XMarkIcon className="header__close-icon" />
      </button>

      {/* Navigation */}
      <nav className="header__nav">
        <ul className="header__nav-list">
          {nav.map((item, idx) => (
            <li key={idx} className="header__nav-item">
              <a href={item.path} className="header__nav-link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};