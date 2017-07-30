import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row } from 'react-bootstrap';
import ScrollAnimation from '../ScrollAnimation';
import ContentTitle from '../ContentTitle';
import './assets/styles.css';

export default class ContentBox extends Component {
  renderRow() {
    const { animateRow, children, rowClassName, animateRowType } = this.props;
    let row = (
      <Row className={rowClassName}>
        {children}
      </Row>
    );
    if (animateRow) {
      row = (
        <ScrollAnimation animateIn={animateRowType || ContentBox.animateRowType}>
          {row}
        </ScrollAnimation>
      );
    }
    return row;
  }
  render() {
    const { title, fluid, titleClassName } = this.props;
    return (
      <div className="content-box">
        <ContentTitle title={title} className={titleClassName} />
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
  titleClassName: PropTypes.string,
  animateRowType: PropTypes.string,
};

ContentBox.defaultProps = {
  animateRow: false,
  children: '',
  fluid: false,
  rowClassName: '',
  titleClassName: '',
  animateRowType: 'fadeInUp',
};
