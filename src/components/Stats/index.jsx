import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import AnimationCount from 'react-count-animation';
import Section from '../Section';
import ContentBox from '../ContentBox';
import Cover from '../Cover';
import DynamicContent from '../DynamicContent';
import './assets/styles.css';
import './assets/responsible.css';

export const ID = 'stats';

class Stats extends Component {
  renderStats() {
    const { columns } = this.props;
    const smColumns = columns * 2;
    return this.props.stats.map(({ value, title, icon }) => (
      <Col key={title} md={columns} sm={smColumns > 12 ? 12 : smColumns}>
        <div className="stats-item">
          <i className={`fa fa-${icon} fa-5x`} />
          <h2>
            <span className="counter">
              <AnimationCount
                animation="up"
                useGroup={false}
                decimals={0}
                duration={2000}
                start={1}
                count={value}
              />
            </span>
            <span>+</span>
          </h2>
          <p>{title}</p>
        </div>
      </Col>
    ));
  }

  render() {
    return (
      <ContentBox
        title="We Never Stop Improving"
        animateRow
        animateRowType="bounceInLeft"
        rowClassName="text-center"
        titleClassName="content-title-white"
      >
        {this.renderStats()}
      </ContentBox>
    );
  }
}

Stats.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.number.isRequired,
};

export default Section(Cover(DynamicContent(Stats), ID), ID);
