import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Section from '../Section';
import ContentBox from '../ContentBox';
import SocialList from '../SocialList';
import './assets/styles.css';

export const ID = 'team';

class Team extends Component {
  renderTeamMembers() {
    return this.props.team.map(({ image, name, designation, socials }) => (
      <div key={name} className="team-member">
        <img src={`img/team/${image}`} className="img-responsive" alt={name} />
        <div className="team-member-info text-center">
          <h4 className="team-member-name">{name}</h4>
          <h4 className="team-member-designation">{designation}</h4>
          <SocialList socials={socials.map(social => ({ type: social, color: 'gray' }))} />
        </div>
      </div>
    ));
  }

  render() {
    return (
      <ContentBox title="Our Team" animateRow>
        <Col md={12}>
          <div id="team-members">
            <Slider
              dotsClass="slick-dots carousel-dots"
              arrows={false}
              dots
              infinite
              pauseOnHover
              touchMove
              adaptiveHeight
              autoplay
              slidesToShow={3}
              slidesToScroll={1}
              responsive={[
                { breakpoint: 321, settings: { slidesToShow: 1 } },
                { breakpoint: 481, settings: { slidesToShow: 2 } },
                { breakpoint: 769, settings: { slidesToShow: 3 } },
              ]}
            >
              {this.renderTeamMembers()}
            </Slider>
          </div>
        </Col>
      </ContentBox>
    );
  }
}

Team.propTypes = {
  team: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Section(Team, ID);
