import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './assets/styles.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div id="contact">
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
                  <ul className="social-list">
                    <li>
                      <a href="#" className="social-icon icon-white">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="social-icon icon-white">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="social-icon icon-white">
                        <i className="fa fa-youtube-play" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="social-icon icon-white">
                        <i className="fa fa-google-plus" />
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md={6}>
                <div id="contact-right">
                  <h3>Contact Us</h3>
                  <form action="#">
                    <input type="text" name="full-name" placeholder="Full Name" className="form-control" />
                    <input type="text" name="email" placeholder="Email Address" className="form-control" />
                    <textarea name="message" placeholder="Message..." rows="5" className="form-control" />
                    <div id="send-btn">
                      <a className="btn btn-lg btn-general btn-white" href="#" role="button">Send</a>
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
              <Col md={6} smHidden xsHidden>
                <div id="footer-menu">
                  <ul>
                    <li>
                      <a className="smooth-scroll" href="#home">Home</a>/
                    </li>
                    <li>
                      <a className="smooth-scroll" href="#services">Services</a>/
                    </li>
                    <li>
                      <a className="smooth-scroll" href="#about">About</a>/
                    </li>
                    <li>
                      <a className="smooth-scroll" href="#work">Work</a>/
                    </li>
                    <li>
                      <a className="smooth-scroll" href="#team">Team</a>/
                    </li>
                    <li>
                      <a className="smooth-scroll" href="#testimonials">Testimonials</a>/
                    </li>
                    <li>
                      <a className="smooth-scroll" href="#pricing">Pricing</a>/
                    </li>
                    <li>
                      <a className="smooth-scroll" href="#stats">Stats</a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
        <a id="back-to-top" className="btn btn-sm btn-blue btn-back-to-top smooth-scroll hidden-sm hidden-xs" href="#home" role="button" title="home">
          <i className="fa fa-angle-up" />
        </a>
      </footer>
    );
  }
}

export default Footer;
