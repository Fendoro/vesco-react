import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { NavigateButton, UseDefaultNavigation } from '../Button';
import { ID as HomeId } from '../Home';
import './assets/styles.css';
import LogoImg from './assets/logo.png';

const NavScrollItem = UseDefaultNavigation(NavItem);

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hash: '',
    };
  }

  onHashChange = () => {
    this.setState({ hash: window.location.hash });
  }

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
        <Navbar inverse fluid fixedTop className="vesco-top-nav">
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
};

export default Header;
