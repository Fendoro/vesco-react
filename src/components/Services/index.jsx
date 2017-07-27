import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import Section from '../Section';
import ContentBox from '../ContentBox';
import ScrollAnimation from '../ScrollAnimation';
import './assets/styles.css';

export const ID = 'services';
class Services extends Component {
  renderData() {
    return this.props.services.map(service => (
      <Col key={service.title} md={4} sm={6}>
        <ScrollAnimation animateIn="fadeInUp">
          <div className="service-item">
            <div className="service-item-icon">
              <i className={`fa fa-${service.icon} fa-3x`} />
            </div>
            <div className="service-item-title">
              <h3>{service.title}</h3>
            </div>
            <div className="service-item-description">
              <p>{service.description}</p>
            </div>
          </div>
        </ScrollAnimation>
      </Col>
    ));
  }

  render() {
    return (
      <ContentBox title="Services">
        {this.renderData()}
      </ContentBox>
    );
  }
}

Services.propTypes = {
  services: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Section(Services, ID);
