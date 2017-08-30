import React, { Component } from 'react';
import throttle from 'lodash.throttle';
import PropTypes from 'prop-types';

export default class ScrollAnimation extends Component {
  static posTop() {
    if (typeof window.pageYOffset !== 'undefined') {
      return window.pageYOffset;
    } else if (document.documentElement.scrollTop) {
      return document.documentElement.scrollTop;
    } else if (document.body.scrollTop) {
      return document.body.scrollTop;
    }
    return 0;
  }

  constructor(props) {
    super(props);
    const initialHide = this.props.initiallyVisible ? '' : 'hidden';
    this.state = {
      classes: 'animated',
      style: { animationDuration: `${this.props.duration}s`, visibility: initialHide },
      lastVisibility: { partially: false, completely: false },
    };
  }

  componentDidMount() {
    this.handleScroll();
    if (window && window.addEventListener) {
      window.addEventListener('scroll', throttle(this.handleScroll, 500));
    }
  }

  componentWillUnmount() {
    if (window && window.addEventListener) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }

  getStyle(visible) {
    const style = { animationDuration: `${this.props.duration}s` };
    if (!visible.partially && !visible.completely && !this.props.initiallyVisible) {
      style.visibility = 'hidden';
    }
    return style;
  }

  getClasses = (visible) => {
    let classes = 'animated';
    if ((visible.completely && this.props.animateIn) ||
      (visible.partially && !this.props.animateOut)) {
      classes += ` ${this.props.animateIn}`;
    } else if (visible.partially && this.state.lastVisibility.completely && this.props.animateOut) {
      classes += ` ${this.props.animateOut}`;
    }
    return classes;
  }

  handleScroll = () => {
    const visible = this.isVisible();
    if ((visible.completely !== this.state.lastVisibility.completely && !visible.partially) ||
      visible.partially !== this.state.lastVisibility.partially) {
      const style = this.getStyle(visible);
      const classes = this.getClasses(visible);
      this.setState({ classes, style, lastVisibility: visible });
    }
  }

  isVisible() {
    const offset = this.props.offset;
    const viewBottom = window.innerHeight - offset;
    const viewTop = offset;
    const nodeRect = this.node.getBoundingClientRect();
    const nodeBottom = nodeRect.bottom;
    const nodeTop = nodeRect.top;
    return {
      completely: (nodeBottom <= viewBottom && nodeTop >= viewTop),
      partially: (nodeTop <= viewBottom && nodeBottom >= viewTop),
    };
  }

  render() {
    return (
      <div
        ref={(node) => { this.node = node; }}
        className={this.state.classes}
        style={this.state.style}
      >
        {this.props.children}
      </div>
    );
  }
}

ScrollAnimation.defaultProps = {
  offset: 100,
  duration: 1,
  initiallyVisible: false,
  delay: 0,
  animateIn: '',
  animateOut: '',
};

ScrollAnimation.propTypes = {
  animateIn: PropTypes.string,
  animateOut: PropTypes.string,
  offset: PropTypes.number,
  duration: PropTypes.number,
  delay: PropTypes.number,
  initiallyVisible: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
