import React from "react";
import logo from '../../img/logoN.webp';

const Header = () => {
    return (
        <header className="App-header">
        <img src = {logo} alt = 'logo'/>
        <nav>
          <ul>
            <li>first</li>
            <li>second</li>
            <li>third</li>
            <li>fourth</li>
          </ul>
        </nav>
      </header>
    )
}

export default Header;