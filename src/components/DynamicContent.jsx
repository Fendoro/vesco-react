import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function (ComposedComponent) {
  class DynamicContent extends Component {
    static calcColumns(columnsPerRow) {
      return 12 / columnsPerRow;
    }

    constructor(props) {
      super(props);

      this.state = {
        columns: DynamicContent.calcColumns(props.columnsPerRow),
      };
    }

    componentWillReceiveProps(nextProps) {
      if (this.props.columnsPerRow !== nextProps.columnsPerRow) {
        this.setState({
          columns: DynamicContent.calcColumns(nextProps.columnsPerRow),
        });
      }
    }

    render() {
      return <ComposedComponent {...this.props} columns={this.state.columns} />;
    }
  }

  DynamicContent.propTypes = {
    columnsPerRow: PropTypes.number,
  };

  DynamicContent.defaultProps = {
    columnsPerRow: 4,
  };

  return DynamicContent;
}
