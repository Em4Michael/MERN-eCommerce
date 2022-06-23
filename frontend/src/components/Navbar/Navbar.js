import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import './Navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Button } from '../Button/Button';

class Navbar extends Component {

  state = { clicked: false }
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }
  render() {
    return (
      <center>
        <nav className="NavbarItems">
          <div>
          <Link to='/Home'> <h1 className="navbar-logo"> ShopKit </h1> </Link>
          </div>
          <div className='navItems'>
            <div className="menu-icon" onClick={this.handleClick}>
              <FontAwesomeIcon icon={this.state.clicked ? faTimes : faBars} />
            </div>
            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
              {MenuItems.map((item, index) => {
                return (
                  <li key={index}>
                    <Link to={`/${item.link}`} className={item.cName}>{item.name}</Link>
                  </li>
                )
              }
              )}
            </ul>
            
            
            <Link to='/Cart'> <div className="shopIcon" ><FontAwesomeIcon icon={faShoppingCart} /></div> </Link>
            <Link to='/SignUp'> <Button>Sign Up</Button> </Link>
            
          </div>
        </nav>
      </center>
    );
  }
}

export default Navbar