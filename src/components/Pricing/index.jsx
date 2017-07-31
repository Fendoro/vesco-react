import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import ScrollAnimation from '../ScrollAnimation';
import Section from '../Section';
import ContentBox from '../ContentBox';
import DynamicContent from '../DynamicContent';
import './assets/styles.css';

export const ID = 'pricing';

class Pricing extends Component {
  static renderPriceInfo(priceInfo) {
    return priceInfo.map(spec => (
      <li key={spec}>
        <p>{spec}</p>
      </li>
    ));
  }

  static getMainPrice(pricing, mainValue) {
    return pricing.findIndex(({ value }) => value === mainValue);
  }

  constructor(props) {
    super(props);

    this.state = {
      mainPriceIndex: props.mainPriceIndex,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.mainPriceIndex !== nextProps.mainPriceIndex) {
      this.setState({
        mainPriceIndex: nextProps.mainPriceIndex,
      });
    }
  }

  renderPricing() {
    const { columns, pricing } = this.props;
    const { mainPriceIndex } = this.state;
    const sortedPricing = pricing.filter((price, index) => index !== mainPriceIndex);
    const mainPrice = pricing[mainPriceIndex];
    const insertIndex = sortedPricing.length / 2;
    sortedPricing.splice(insertIndex, 0, mainPrice);
    return sortedPricing.map(({ title, value, specs }, index) => {
      const isMain = index === insertIndex;
      return (
        <Col key={value} md={columns}>
          <ScrollAnimation animateIn={isMain ? 'bounceInUp' : 'zoomIn'}>
            <div className={`pricing-box text-center ${isMain ? 'pricing-box-lg' : ''}`}>
              <h4 className="pricing-title">{title}</h4>
              <h3 className="pricing-value">{value}<sup>$</sup></h3>
              <ul className="pricing-spec">
                {Pricing.renderPriceInfo(specs)}
              </ul>
              <div className="pricing-btn">
                <a className={`btn btn-lg btn-general btn-${isMain ? 'white' : 'blue'}`} href="#" role="button">Purchase</a>
              </div>
            </div>
          </ScrollAnimation>
        </Col>
      );
    });
  }

  render() {
    return (
      <ContentBox title="Our Pricing">
        {this.renderPricing()}
      </ContentBox>
    );
  }
}

Pricing.propTypes = {
  pricing: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.number.isRequired,
  mainPriceIndex: PropTypes.number.isRequired,
};

export default Section(DynamicContent(Pricing), ID);
