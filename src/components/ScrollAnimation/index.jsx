import React from 'react';
import PropTypes from 'prop-types';
import ScrollAnimation from 'react-animate-on-scroll';

const VescoScrollAnimation = props => (
  <ScrollAnimation offset={0} duration={1} delay={0.5} {...props}>
    {props.children}
  </ScrollAnimation>
);

VescoScrollAnimation.propTypes = {
  children: PropTypes.element.isRequired,
};

export default VescoScrollAnimation;
