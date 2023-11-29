import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_body'>
      <div className='footer_logo'>
        <h2>FAST-TRADERS<i class='fab fa-firstdraft' /></h2>
        <p>We want you to not just Trade in the world’s financial markets,
           but also with a simple and user friendly online platform.</p>
      </div>
      <div>
        <h2><i class='fab fa-firstdraft' />Useful Links</h2>
        <ul>
          <li>About</li>
          <li>Features</li>
          <li>Process</li>
        </ul>
      </div>
      <div>
        <h2><i class='fab fa-firstdraft' />Markets</h2>
        <ul>
          <li>Forex</li>
          <li>indices</li>
          <li>Commodities</li>
        </ul>
      </div>
      <div>
        <h2><i class='fab fa-firstdraft' />Contact</h2>
        <p>info@thefiptrades.com</p>
        <p>+16192890994</p>
        <p>2174 North point pleasant road, Texas</p>
      </div>


    </div>
    </div>
    

  );
};