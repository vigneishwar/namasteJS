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

const RestaurantCard = (props) => {
  return (
    <div className="res-card">
      <img className ="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/83650e6ca1465c58063a70ad22be4f28" />
      <h3>{props.resName}</h3>
      <h4>{props.cusine}</h4>
      <h4>4.8 Stars</h4>
      <h4>45 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resName = "Ambur Briyani" cusine = "Briyani South Indian"/>
        <RestaurantCard resName = "KFC" cusine = "Burgers, Fast Food"/>
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
