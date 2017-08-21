import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SocialList extends Component {
  renderSocials() {
    return this.props.socials.map(({ type, color }) => (
      <li key={type}>
        <a href="#" className={`social-icon icon-${color}`}>
          <i className={`fa fa-${type}`} />
        </a>
      </li>
    ));
  }

  render() {
    return (
      <ul className="social-list">
        {this.renderSocials()}
      </ul>
    );
  }
}

SocialList.propTypes = {
  socials: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SocialList;
