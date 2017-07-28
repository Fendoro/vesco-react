import React from 'react';
import Home from './Home';
import Services from './Services';
import services from '../data/services.json';
import About from './About';
import Work from './Work';
import works from '../data/works.json';

const App = () => (
  <div id="app">
    <Home />
    <Services services={services} />
    <About />
    <Work works={works} />
  </div>
);

export default App;
