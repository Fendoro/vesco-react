import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row } from 'react-bootstrap';
import ScrollAnimation from '../ScrollAnimation';
import './assets/styles.css';

export default class ContentBox extends Component {
  renderRow() {
    const { animateRow, children } = this.props;
    let row = (
      <Row>
        {children}
      </Row>
    );
    if (animateRow) {
      row = (
        <ScrollAnimation animateIn="fadeInUp">
          {row}
        </ScrollAnimation>
      );
    }
    return row;
  }
  render() {
    const { title } = this.props;
    return (
      <div className="content-box">
        <ScrollAnimation animateIn="fadeInDown">
          <div className="content-title">
            <h3>{title}</h3>
            <div className="content-title-underline" />
          </div>
        </ScrollAnimation>
        <Grid>
          {this.renderRow()}
        </Grid>
      </div>
    );
  }
}

ContentBox.propTypes = {
  title: PropTypes.string.isRequired,
  animateRow: PropTypes.bool,
  children: PropTypes.node,
};
ContentBox.defaultProps = {
  animateRow: true,
  children: '',
};
