import TopNavigation from './components/TopNavigation';
import AboutComplex from './components/AboutComplex';
import Dignities from './components/Dignities';
import Plans from './components/Plans';
import Location from './components/Location';
import Documents from './components/Documents';
import Footer from './components/Footer';
import * as React from "react";

function App() {
  return (
    <>
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
