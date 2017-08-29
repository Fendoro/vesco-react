import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './assets/styles.css';
import LogoImg from './assets/logo.png';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hash: '',
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', this.onHashChange);
  }

  componentWillUnmount() {
    window.removeEventListener('hashchange', this.onHashChange);
  }

  onHashChange = () => {
    this.setState({ hash: window.location.hash });
  }

  renderItems() {
    return this.props.menuItems.map(({ id, title }) =>
      <NavItem key={id} active={this.state.hash.includes(id)} href={`#${id}`} className="smooth-scroll">{title}</NavItem>,
    );
  }

  render() {
    return (
      <header>
        <Navbar inverse fluid fixedTop className="vesco-top-nav">
          <div className="vesco-nav-wrapper">
            <Navbar.Header>
              <Navbar.Brand>
                <a className="smooth-scroll" href="#home">
                  <img src={LogoImg} alt="logo" />
                </a>
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
