import React from 'react';
import PropTypes from 'prop-types';
import ScrollAnimation from './ScrollAnimation';

const VescoScrollAnimation = props => (
  <ScrollAnimation offset={100} duration={1} delay={0.5} {...props}>
    {props.children}
  </ScrollAnimation>
);

VescoScrollAnimation.propTypes = {
  children: PropTypes.element.isRequired,
};

export default VescoScrollAnimation;
