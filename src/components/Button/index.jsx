import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import './assets/styles.css';

const VescoButton = (props) => {
  const { bsClass, children } = props;
  return <Button {...props} bsClass={`btn btn-lg ${bsClass || ''}`} >{children}</Button>;
};

VescoButton.defaultProps = {
  bsClass: '',
  children: '',
};

VescoButton.propTypes = {
  bsClass: PropTypes.string,
  children: PropTypes.node,
};

export const BaseButton = (props) => {
  const { bsClass } = props;
  return <VescoButton {...props} bsClass={`btn-general ${bsClass || ''}`} />;
};

BaseButton.propTypes = VescoButton.propTypes;
BaseButton.defaultProps = VescoButton.defaultProps;

export const WhiteButton = (props) => {
  const { bsClass } = props;
  return <BaseButton {...props} bsClass={`btn-white ${bsClass || ''}`} />;
};

WhiteButton.propTypes = VescoButton.propTypes;
WhiteButton.defaultProps = VescoButton.defaultProps;

export const BlueButton = (props) => {
  const { bsClass } = props;
  return <BaseButton {...props} bsClass={`btn-blue ${bsClass || ''}`} />;
};

BlueButton.propTypes = VescoButton.propTypes;
BlueButton.defaultProps = VescoButton.defaultProps;

export const UseNavigate = ComposedComponent => (props) => {
  const { bsClass } = props;
  const newBsClass = `smooth-scroll ${bsClass || ''}`;
  return <ComposedComponent {...props} bsClass={newBsClass} />;
};

export const BackToTop = ComposedComponent => (props) => {
  const { bsClass } = props;
  const newBsClass = `btn-back-to-top ${bsClass || ''}`;
  return <ComposedComponent id="back-to-top" {...props} bsClass={newBsClass} />;
};

export const NavigateButton = UseNavigate(Button);
