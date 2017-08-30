import React, { Component } from 'react';

const CheckOnTop = (ComposedComponent) => {
  class CheckOnTopComponent extends Component {
    static isOnTop() {
      return window.scrollY < 50;
    }

    constructor(props) {
      super(props);

      this.state = {
        onTop: CheckOnTopComponent.isOnTop(),
      };
    }

    componentDidMount() {
      window.addEventListener('scroll', this.onScroll);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll);
    }

    onScroll = () => {
      this.setState({ onTop: CheckOnTopComponent.isOnTop() });
    }

    render() {
      return <ComposedComponent {...this.props} onTop={this.state.onTop} />;
    }
  }

  return CheckOnTopComponent;
};

export default CheckOnTop;
