import React from 'react';
import Home, { ID as HomeId } from './Home';
import Services, { ID as ServicesId } from './Services';
import services from '../data/services.json';
import About, { ID as AboutId } from './About';
import Work, { ID as WorkId } from './Work';
import works from '../data/works.json';
import Team, { ID as TeamId } from './Team';
import team from '../data/team.json';
import Testimonials, { ID as TestimonialsId } from './Testimonials';
import testimonials from '../data/testimonials.json';
import Pricing, { ID as PricingId } from './Pricing';
import pricing from '../data/pricing.json';
import Stats, { ID as StatsId } from './Stats';
import stats from '../data/stats.json';
import Clients, { ID as ClientsId } from './Clients';
import clients from '../data/clients.json';
import Footer from './Footer';

const Menu = [
  {
    id: HomeId,
    title: "Home"
  },
  {
    id: ServicesId,
    title: "Services"
  },
  {
    id: AboutId,
    title: "About"
  },
  {
    id: WorkId,
    title: "Work"
  },
  {
    id: TeamId,
    title: "Team"
  },
  {
    id: TestimonialsId,
    title: "Testimonials"
  },
  {
    id: PricingId,
    title: "Pricing"
  },
  {
    id: StatsId,
    title: "Stats"
  },
  {
    id: ClientsId,
    title: "Clients"
  }
];

const App = () => (
  <div id="app">
    <Home />
    <Services services={services} columnsPerRow={3} />
    <About />
    <Work works={works} />
    <Team team={team} />
    <Testimonials testimonials={testimonials} />
    <Pricing pricing={pricing} mainPriceIndex={1} columnsPerRow={3} />
    <Stats stats={stats} columnsPerRow={stats.length} />
    <Clients clients={clients} />
    <Footer showMenu menuItems={Menu.slice(0, Menu.length - 1)} />
  </div>
);

export default App;
