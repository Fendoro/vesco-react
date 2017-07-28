import React from 'react';
import Home from './Home';
import Services from './Services';
import services from '../data/services.json';
import About from './About';
import Work from './Work';
import works from '../data/works.json';
import Team from './Team';
import team from '../data/team.json';

const App = () => (
  <div id="app">
     <Home />
    <Services services={services} />
    <About /> 
    <Work works={works} />
    <Team team={team} />
  </div>
);

export default App;
