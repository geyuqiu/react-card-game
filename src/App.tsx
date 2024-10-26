import React, { createContext, useState } from 'react';
import Details from './components/Details/Details';
import Controls from './components/Controls/Controls';
import Overview from './components/Overview/Overview';
import { Item } from './models/item';

export function Layout() {
  const [item, setItem] = useState<Item>({} as Item);

  const updateItem = (newItem: Item) => {
    setItem(newItem);
  };

  return (
    <>
      <Details item={item}/>
      <Controls/>
      <Overview updateItem={updateItem}/>
    </>
  );
}

export default function App() {
  return (
    <Layout />
  );
}
