import React from 'react';
import Details from './components/Details/Details';
import Controls from './components/Controls/Controls';
import Overview from './components/Overview/Overview';
import Weather from './components/Weather/Weather';

export function Layout() {
  return (
    <>
      <Details/>
      <Controls/>
      <Overview/>
      <Weather/>
    </>
  );
}

export default function App() {
  return (
    <Layout />
  );
}
