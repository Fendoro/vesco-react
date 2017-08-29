import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { Helpers } from 'react-scroll'; // Imports all Mixins
import DefaultProps from '../DefaultProps';
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

export function UseNavigate(ComposedComponent) {
  class UseNavigateComponent extends Component {
    render() {
      const { bsClass } = this.props;
      const newBsClass = `smooth-scroll ${bsClass || ''}`;
      return <ComposedComponent {...this.props} bsClass={newBsClass} />;
    }
  }

  return Helpers.Scroll(UseNavigateComponent);
}

export const UseDefaultNavigation = ComposedComponent => (
  DefaultProps({
    smooth: true,
    offset: -64,
    duration: 1250,
    delay: 100,
    isDynamic: true,
  })(UseNavigate(ComposedComponent))
);

export function BackToTop(ComposedComponent) {
  class BackToTopComponent extends Component {
    render() {
      const { bsClass } = this.props;
      const newBsClass = `btn-back-to-top ${bsClass || ''}`;
      return <ComposedComponent id="back-to-top" {...this.props} bsClass={newBsClass} />;
    }
  }

  return UseDefaultNavigation(BackToTopComponent);
}

export const NavigateButton = UseDefaultNavigation(Button);
