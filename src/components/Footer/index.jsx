import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';
import { NavigateButton, BlueButton, BackToTop, WhiteButton } from '../Button';
import SocialList from '../SocialList';
import './assets/styles.css';

const Button = BackToTop(BlueButton);
export const ID = 'contact';

class Footer extends Component {
  renderMenuItems() {
    const { menuItems } = this.props;
    const lastIndex = menuItems.length - 1;
    return menuItems.map(({ id, title }, index) => (
      <li key={id}>
        <NavigateButton
          href={`#${id}`}
          to={id}
          spy
          smooth
          offset={-64}
          duration={1250}
          delay={100}
          isDynamic
        >
          {title}
        </NavigateButton>
        {index === lastIndex ? '' : '/'}
      </li>
    ));
  }

  renderFooterMenu() {
    if (this.props.showMenu) {
      return (<Col md={6} smHidden xsHidden>
        <div id="footer-menu">
          <ul>
            {this.renderMenuItems()}
          </ul>
        </div>
      </Col>);
    }
    return null;
  }

  renderBackToTop() {
    const { id, title } = this.props.menuItems[0];
    return (
      <Button title={title} href={`#${id}`} >
        <i className="fa fa-angle-up" />
      </Button>
    );
  }

  renderSocials() {
    if (this.props.showSocials) {
      return <SocialList socials={this.props.socials} />;
    }
    return null;
  }

  render() {
    return (
      <footer>
        <div id={ID}>
          <Grid>
            <Row>
              <Col md={6}>
                <div id="contact-left">
                  <h3>VESCO</h3>
                  <p>We believe in <strong>Simple</strong>, <strong>Clean</strong> & <strong>Modern</strong> Design
                                Standards with Responsive Approach. Browse the amazing work of our company.</p>
                  <div id="contact-info">
                    <address>
                      <strong>Headquarters:</strong><br />
                      <p>221 Jockey Hollow, Suite 600<br />Smithtown, NY 11787</p>
                    </address>
                    <div id="phone-fax-email">
                      <p>
                        <strong>Phone:</strong> <span>(91) 8974 56984</span><br />
                        <strong>Fax:</strong> <span>(91) 66 8754 8978</span><br />
                        <strong>Email:</strong> <span>info@vesco.com</span><br />
                      </p>
                    </div>
                  </div>
                  {this.renderSocials()}
                </div>
              </Col>
              <Col md={6}>
                <div id="contact-right">
                  <h3>Contact Us</h3>
                  <form action="#">
                    <input type="text" name="full-name" placeholder="Full Name" className="form-control" required />
                    <input type="email" name="email" placeholder="Email Address" className="form-control" required />
                    <textarea name="message" placeholder="Message..." rows="5" className="form-control" required />
                    <div id="send-btn">
                      <WhiteButton href="#">Send</WhiteButton>
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
        <div id="footer-bottom">
          <Grid>
            <Row>
              <Col md={6}>
                <div id="footer-copyrights">
                  <p>Copyrights &copy; 2017 All Rights Reserved by Vesco Inc.</p>
                </div>
              </Col>
              {this.renderFooterMenu()}
            </Row>
          </Grid>
        </div>
        {this.renderBackToTop()}
      </footer>
    );
  }
}

Footer.propTypes = {
  showMenu: PropTypes.bool,
  menuItems: PropTypes.arrayOf(PropTypes.object),
  showSocials: PropTypes.bool,
  socials: PropTypes.arrayOf(PropTypes.object),
};

Footer.defaultProps = {
  showMenu: false,
  menuItems: [],
  showSocials: false,
  socials: [],
};

export default Footer;
