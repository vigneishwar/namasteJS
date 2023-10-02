import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faRightToBracket,
  faCartShopping,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <FontAwesomeIcon className="nav-icons" icon={faHouse} />
            Home
          </li>
          <li>
            <FontAwesomeIcon className="nav-icons" icon={faRightToBracket} />
            Log IN
          </li>
          <li>
            <FontAwesomeIcon className="nav-icons" icon={faCartShopping} />
            Cart
          </li>
          <li>
            <FontAwesomeIcon className="nav-icons" icon={faGlobe} />
            Region
          </li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
