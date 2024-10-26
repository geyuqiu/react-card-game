import React from 'react';
import Details from './components/Details/Details';
import Controls from './components/Controls/Controls';
import Overview from './components/Overview/Overview';

export function Layout() {
  return (
    <>
      <Details/>
      <Controls/>
      <Overview/>
    </>
  );
}

export default function App() {
  return (
    <Layout />
  );
}
