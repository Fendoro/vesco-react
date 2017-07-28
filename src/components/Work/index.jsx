import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'react-images';
import { Col } from 'react-bootstrap';
import Section from '../Section';
import ContentBox from '../ContentBox';
import './assets/styles.css';

export const ID = 'work';

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    };
  }

  renderWorks() {
    return this.props.works.map((work, index) => (
      <Col key={work.image} md={3} sm={4}>
        <div className="img-wrapper">
          <a
            tabIndex={index}
            role="button"
            onClick={() => this.setState({ lightboxIsOpen: true, currentImage: index })}
            title={work.description}
          >
            <img className="img-responsive" src={`img/work/${work.image}`} alt={work.description} />
          </a>
        </div>
      </Col>
    ));
  }

  render() {
    return (
      <ContentBox title="Our Work" rowClassName="no-gutters" fluid animateRow>
        {this.renderWorks()}
        <Lightbox
          images={this.props.works.map(work => ({ src: `img/work/${work.image}` }))}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
          onClickPrev={() => this.setState({ currentImage: this.state.currentImage - 1 })}
          onClickNext={() => this.setState({ currentImage: this.state.currentImage + 1 })}
          onClose={() => this.setState({ lightboxIsOpen: false })}
        />
      </ContentBox>
    );
  }
}

Work.propTypes = {
  works: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Section(Work, ID);
