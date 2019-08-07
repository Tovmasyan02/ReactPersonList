import React from 'react';
import './Header.css';

class Header extends React.Component
{
   render()
   {
    return (
    <header>
       <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Contacts</li>       
       </ul>
    </header>
    );
    }
}

export default Header;