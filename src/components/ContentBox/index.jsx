import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row } from 'react-bootstrap';
import ScrollAnimation from '../ScrollAnimation';
import ContentTitle from '../ContentTitle';
import './assets/styles.css';

export default class ContentBox extends Component {
  renderRow() {
    const { animateRow, children, rowClassName } = this.props;
    let row = (
      <Row className={rowClassName}>
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
    const { title, fluid } = this.props;
    return (
      <div className="content-box">
        <ContentTitle title={title} />
        <Grid fluid={fluid}>
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
  fluid: PropTypes.bool,
  rowClassName: PropTypes.string,
};
ContentBox.defaultProps = {
  animateRow: true,
  children: '',
  fluid: false,
  rowClassName: '',
};
