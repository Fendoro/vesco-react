import React from 'react';
import PropTypes from 'prop-types';
import ScrollAnimation from '../ScrollAnimation';
import './assets/styles.css';

const ContentTitle = props => (
  <ScrollAnimation animateIn="fadeInDown">
    <div className="content-title">
      <h3>{props.title}</h3>
      <div className="content-title-underline" />
    </div>
  </ScrollAnimation>
);

ContentTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ContentTitle;
