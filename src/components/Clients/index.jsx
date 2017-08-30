import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Section from '../Section';
import ContentBox from '../ContentBox';
import './assets/styles.css';

export const ID = 'clients';

class Clients extends Component {
  renderClients() {
    return this.props.clients.map(({ image }) => (
      <div key={image} className="client">
        <img src={`img/client/logos/${image}`} className="img-responsive" alt="client" />
      </div>
    ));
  }

  render() {
    return (
      <ContentBox
        title="Clients"
        animateRow
        animateRowType="bounceInLeft"
      >
        <Col md={12}>
          <div id="clients-list">
            <Slider
              dotsClass="slick-dots carousel-dots"
              arrows={false}
              dots
              infinite
              pauseOnHover
              touchMove
              adaptiveHeight
              autoplay
              slidesToShow={6}
              slidesToScroll={1}
              responsive={[
                { breakpoint: 321, settings: { slidesToShow: 1 } },
                { breakpoint: 481, settings: { slidesToShow: 3 } },
                { breakpoint: 769, settings: { slidesToShow: 5 } },
                { breakpoint: 993, settings: { slidesToShow: 6 } },
              ]}
            >
              {this.renderClients()}
            </Slider>
          </div>
        </Col>
      </ContentBox>
    );
  }
}

Clients.propTypes = {
  clients: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Section(Clients, ID);
