import React from 'react';
import Home from './Home';
import Services from './Services';
import services from '../data/services.json';
import About from './About';
import Work from './Work';
import works from '../data/works.json';
import Team from './Team';
import team from '../data/team.json';
import Testimonials from './Testimonials';
import testimonials from '../data/testimonials.json';
import Pricing from './Pricing';
import pricing from '../data/pricing.json';

const App = () => (
  <div id="app">
    <Home />
    <Services services={services} />
    <About />
    <Work works={works} />
    <Team team={team} />
    <Testimonials testimonials={testimonials} />
    <Pricing pricing={pricing} mainPriceIndex={1} />
  </div>
);

export default App;
