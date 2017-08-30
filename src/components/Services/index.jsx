import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import Section from '../Section';
import ContentBox from '../ContentBox';
import DynamicContent from '../DynamicContent';
import ScrollAnimation from '../ScrollAnimation';
import './assets/styles.css';
import './assets/responsible.css';

export const ID = 'services';
class Services extends Component {
  renderData() {
    const { columns } = this.props;
    return this.props.services.map(service => (
      <Col key={service.title} md={columns} sm={columns * 2}>
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
  columns: PropTypes.number.isRequired,
};

export default Section(DynamicContent(Services), ID);
