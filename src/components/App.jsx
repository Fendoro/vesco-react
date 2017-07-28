import React from 'react';
import Home from './Home';
import Services from './Services';
import services from '../data/services.json';
import About from './About';

const App = () => (
  <div id="app">
    <Home />
    <Services services={services} />
    <About />
  </div>
);

export default App;
