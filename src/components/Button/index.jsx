import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { Helpers } from 'react-scroll';
import DefaultProps from '../DefaultProps';
import './assets/styles.css';
import './assets/responsible.css';

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

export const UseNavigate = (ComposedComponent, useBtnStyle = true) => {
  const UseNavigateComponent = (props) => {
    const opts = {};
    if (useBtnStyle) {
      const { bsClass } = props;
      const newBsClass = `smooth-scroll ${bsClass || ''}`;
      opts.bsClass = newBsClass;
    }
    return <ComposedComponent {...props} {...opts} />;
  };
  UseNavigateComponent.propTypes = VescoButton.propTypes;

  return Helpers.Scroll(UseNavigateComponent);
};

export const UseDefaultNavigation = (ComposedComponent, useBtnStyle = true) => (
  DefaultProps({
    smooth: true,
    offset: -64,
    duration: 1250,
    delay: 100,
    isDynamic: true,
  })(UseNavigate(ComposedComponent, useBtnStyle))
);

export const BackToTop = (ComposedComponent) => {
  const BackToTopComponent = (props) => {
    const { bsClass } = props;
    const newBsClass = `btn-back-to-top ${bsClass || ''}`;
    return <ComposedComponent id="back-to-top" {...props} bsClass={newBsClass} />;
  };
  BackToTopComponent.propTypes = VescoButton.propTypes;
  BackToTopComponent.defaultProps = VescoButton.defaultProps;

  return UseDefaultNavigation(BackToTopComponent);
};

export const NavigateButton = UseDefaultNavigation(Button);
