import React, { useEffect, useState } from 'react';
import Details from './components/Details/Details';
import Controls from './components/Controls/Controls';
import Overview, { apiUrl } from './components/Overview/Overview';
import { Player } from './models/player';
import { useFetch } from './hooks/useFetch';

export function Layout() {
  const [player, setPlayer]
    = useState<Player>({} as Player);
  const {results} = useFetch<Player[]>(apiUrl);
  const [sortedResults, setSortedResults]
    = useState<Player[]>(results || []);

  useEffect(() => {
    if (results && results.length) {
      setSortedResults(results);
    }
  }, [results]);

  const updateItem = (newItem: Player) => {
    setPlayer(newItem);
  };

  const sortResultsAsc = () => {
    const sorted = [...(results || [])]
      .sort((a, b) => {
      return a.realName.localeCompare(b.realName);
    });
    setSortedResults(sorted);
    setPlayer({} as Player);
  };

  const sortResultsDesc = () => {
    const sorted = [...(results || [])]
      .sort((a, b) => {
      return b.realName.localeCompare(a.realName);
    });
    setSortedResults(sorted);
    setPlayer({} as Player);
  };

  return (
    <>
      <div className="flex p-6 space-x-4">
        <Details player={player}/>
        <Controls player={player} sortResultsAsc={sortResultsAsc} sortResultsDesc={sortResultsDesc}/>
      </div>
      <Overview updatePlayer={updateItem} sortedResults={sortedResults}/>
    </>
  );
}

export default function App() {
  return (
    <Layout />
  );
}
