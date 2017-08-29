import React, { Component } from 'react';

const DefaultProps =
  defaultProps =>
    DecoratedComponent =>
      class DefaultPropsComponent extends Component {
        static get defaultProps() {
          return defaultProps;
        }

        render() {
          return <DecoratedComponent {...this.props} />;
        }
      };

export default DefaultProps;
