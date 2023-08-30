import '@/scss/style.scss'
import '@/scss/components/_menumobile.scss'
import React, { useState } from 'react';

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
      <button className="menu-toggle" onClick={handleMenuToggle}>
        Menu
      </button>
      <ul className="menu-items">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );
};

export default MobileMenu;