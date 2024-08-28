import React from 'react';
import apple_logo from './resources/header icons/apple logo.png';
import search_icon from './resources/header icons/search from tg.jpg';
import cart_icon from './resources/header icons/cart from tg.jpg';

function Header() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><a href="#"><img src={apple_logo} alt="Apple logo" /></a></li>
            <li><a href="#">Store</a></li>
            <li><a href="#">Mac</a></li>
            <li><a href="#">iPad</a></li>
            <li><a href="#">iPhone</a></li>
            <li><a href="#">Watch</a></li>
            <li><a href="#">Vision</a></li>
            <li><a href="#">AirPods</a></li>
            <li><a href="#">TV & Home</a></li>
            <li><a href="#">Entertainment</a></li>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#"><img src={search_icon} alt="Search icon" /></a></li>
            <li><a href="#"><img src={cart_icon} alt="Cart icon" /></a></li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
