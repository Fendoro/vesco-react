import React from 'react';
import Home from './Home';
import Services from './Services';
import services from '../data/services.json';

const App = () => (
  <div id="app">
    <Home />
    <Services services={services} />
  </div>
);

export default App;
