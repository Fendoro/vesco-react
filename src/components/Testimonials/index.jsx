import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Section from '../Section';
import ContentBox from '../ContentBox';
import Cover from '../Cover';
import './assets/styles.css';
import './assets/responsible.css';

export const ID = 'testimonials';

class Testimonials extends Component {
  renderTestimonials() {
    return this.props.testimonials.map(({ image, name, designation, testimonial }) => (
      <div key={name} className="testimonial text-center">
        <img src={`img/client/${image}`} className="img-responsive img-circle" alt={name} />
        <blockquote>
          <p>{testimonial}</p>
        </blockquote>
        <div className="testimonial-author">
          <p>
            <strong>{name}</strong>
            <span>{designation}</span>
          </p>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <ContentBox
        title="What Our Customers Say"
        animateRow
        animateRowType="bounceInDown"
        titleClassName="content-title-white"
      >
        <Col md={12}>
          <div id="customers-testimonials">
            <Slider
              dotsClass="slick-dots carousel-dots"
              arrows={false}
              dots
              infinite
              pauseOnHover
              touchMove
              adaptiveHeight
              autoplay
              slidesToShow={1}
              slidesToScroll={1}
              responsive={[
                { breakpoint: 10000000, settings: { slidesToShow: 1 } },
              ]}
            >
              {this.renderTestimonials()}
            </Slider>
          </div>
        </Col>
      </ContentBox>
    );
  }
}

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Section(Cover(Testimonials, ID), ID);
