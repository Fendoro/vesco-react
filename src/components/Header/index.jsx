import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { NavigateButton, UseDefaultNavigation } from '../Button';
import { ID as HomeId } from '../Home';
import CheckOnTop from '../CheckOnTop';
import './assets/styles.css';
import './assets/responsible.css';
import LogoImg from './assets/logo.png';

const NavScrollItem = UseDefaultNavigation(NavItem, false);

class Header extends Component {

  renderItems() {
    return this.props.menuItems.map(({ id, title }) =>
      (<NavScrollItem
        key={id}
        href={`#${id}`}
        to={id}
        spy
      >
        {title}
      </NavScrollItem>),
    );
  }

  render() {
    return (
      <header>
        <Navbar collapseOnSelect inverse fluid fixedTop className={`vesco-navbar ${!this.props.onTop ? 'vesco-top-nav' : ''}`}>
          <div className="vesco-nav-wrapper">
            <Navbar.Header>
              <Navbar.Brand>
                <NavigateButton
                  href={`#${HomeId}`}
                  to={HomeId}
                >
                  <img src={LogoImg} alt="logo" />
                </NavigateButton>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse className="no-max-height">
              <Nav>
                {this.renderItems()}
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </header>);
  }
}

Header.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  onTop: PropTypes.bool,
};

Header.defaultProps = {
  onTop: false,
};

export default CheckOnTop(Header);
