import React from 'react';
import { WhiteButton, UseDefaultNavigation } from '../Button';
import Section from '../Section';
import Cover from '../Cover';
import ScrollAnimation from '../ScrollAnimation';
import { ID as WorkId } from '../Work';
import './assets/styles.css';
import './assets/responsible.css';

export const ID = 'home';
const Home = () => {
  const Button = UseDefaultNavigation(WhiteButton);
  return (
    <div id={`${ID}-content-box`}>
      <div id={`${ID}-content-box-inner`} className="text-center">
        <ScrollAnimation animateIn="zoomIn">
          <div id={`${ID}-heading`} >
            <h3>Watch Out<br />The Modern Responsive Website!</h3>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="zoomIn">
          <div id={`${ID}-btn`} >
            <Button
              bsSize="lg"
              href={`#${WorkId}`}
              type="button"
              to={WorkId}
            >
              View Our Work
          </Button>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Section(Cover(Home, ID, 'animated fadeIn'), ID);
