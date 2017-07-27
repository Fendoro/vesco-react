import React from 'react';
import { WhiteButton, UseNavigate } from '../Button';
import Section from '../Section';
import Cover from '../Cover';
import * as Work from '../Work';
import './assets/styles.css';

export const ID = 'home';
const Home = () => {
  const Button = UseNavigate(WhiteButton);
  return (
    <div id={`${ID}-content-box`}>
      <div id={`${ID}-content-box-inner`} className="text-center">
        <div id={`${ID}-heading`} className="animated zoomIn">
          <h3>Watch Out<br />The Modern Responsive Website!</h3>
        </div>
        <div id={`${ID}-btn`} className="animated zoomIn">
          <Button
            bsSize="lg"
            href={`#${Work.ID}`}
            type="button"
          >
            View Our Work
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Section(Cover(Home, ID, 'animated fadeIn'), ID);