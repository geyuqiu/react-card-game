import React, { useEffect, useState } from 'react';
import Details from './components/Details/Details';
import Controls from './components/Controls/Controls';
import Overview, { apiUrl } from './components/Overview/Overview';
import { Item } from './models/item';
import { useFetch } from './hooks/useFetch';

export function Layout() {
  const [item, setItem] = useState<Item>({} as Item);
  const {results} = useFetch<Item[]>(apiUrl);
  const [sortedResults, setSortedResults] = useState<Item[]>(results || []);

  useEffect(() => {
    if (results) {
      setSortedResults(results);
    }
  }, [results]);

  const updateItem = (newItem: Item) => {
    setItem(newItem);
  };

  const sortResultsAsc = () => {
    const sorted = [...(results || [])].sort((a, b) => {
      return a.realName.localeCompare(b.realName);
    });
    setSortedResults(sorted);
  };

  const sortResultsDesc = () => {
    const sorted = [...(results || [])].sort((a, b) => {
      return b.realName.localeCompare(a.realName);
    });
    setSortedResults(sorted);
  };

  return (
    <>
      <Details item={item}/>
      <Controls item={item} sortResultsAsc={sortResultsAsc} sortResultsDesc={sortResultsDesc}/>
      <Overview updateItem={updateItem} sortedResults={sortedResults}/>
    </>
  );
}

export default function App() {
  return (
    <Layout />
  );
}
