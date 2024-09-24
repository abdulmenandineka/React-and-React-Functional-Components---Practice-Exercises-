import React from 'react';
import appleLogo from './resources/images/icons/logo.png';
import searchIcon from './resources/images/icons/search-icon.png';
import cartIcon from './resources/images/icons/cart.png';

function Header() {
  return (
    <div>
      <header className="header-wrapper">
        <div className="internal-wrapper"> 
          <div className="header-links-wrapper">
            <ul>
              <li className="logo-link"><a href="/"><img src={appleLogo} alt="Apple Logo" /></a></li>
              <li><a href="/mac/">Mac</a></li>
              <li><a href="mac">iPhone</a></li>
              <li><a href="mac">iPad</a></li>
              <li><a href="mac">Watch</a></li>
              <li><a href="mac">TV</a></li>
              <li><a href="mac">Music</a></li>
              <li><a href="mac">Support</a></li>
              <li className="search-link"><a href="/search/"><img src={searchIcon} alt="Search Icon" /></a></li>
              <li className="cart-link"><a href="/cart/"><img src={cartIcon} alt="Cart Icon" /></a></li>
            </ul>					
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;