import TopNavigation from './components/TopNavigation';
import AboutComplex from './components/AboutComplex';
import Dignities from './components/Dignities';
import Plans from './components/Plans';
import Location from './components/Location';
import Documents from './components/Documents';
import { YMInitializer } from 'react-yandex-metrika';
import Footer from './components/Footer';
import * as React from "react";

function App() {
  return (
    <>
      <YMInitializer accounts={[90612720]} />
      <TopNavigation />
      <AboutComplex />
      <Dignities />
      <Plans />
      <Location />
      <Documents />
      <Footer />
    </>
  );
}

export { App }
