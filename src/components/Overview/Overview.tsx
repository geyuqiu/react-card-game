import React from "react";
import { useFetch } from '../../hooks/useFetch';
import { Item } from '../../models/item';
import OverviewItem from '../OverviewItem/OverviewItem';

export const apiUrl = 'https://opensource.aoe.com/the-card-game-data/player.json';

export default function Overview () {
  const {results} = useFetch<Item[]>(apiUrl);

  return (
    <div data-testid='overview-list'>
      { results?.length && results.map((item: Item, i: number) =>
        <OverviewItem item={item} key={i}/>
      )}
    </div>
  );
}
