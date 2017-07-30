import React from 'react';
import PropTypes from 'prop-types';
import ScrollAnimation from '../ScrollAnimation';
import './assets/styles.css';

const ContentTitle = ({ title, className }) => (
  <ScrollAnimation animateIn="fadeInDown">
    <div className={`content-title ${className}`}>
      <h3>{title}</h3>
      <div className="content-title-underline" />
    </div>
  </ScrollAnimation>
);

ContentTitle.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

ContentTitle.defaultProps = {
  className: '',
};

export default ContentTitle;
