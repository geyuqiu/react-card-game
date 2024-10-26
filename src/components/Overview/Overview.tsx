import React from "react";
import { Player } from '../../models/player';
import OverviewItem from '../OverviewItem/OverviewItem';

export const apiUrl = 'https://opensource.aoe.com/the-card-game-data/player.json';

interface OverviewProps {
  updatePlayer: (newValue: Player) => void;
  sortedResults: Player[] | null;
}

export default function Overview (props: OverviewProps) {
  return (
    <>
      <h1 className="px-2 text-4xl font-thin px-6">Overview</h1>
      <div className="grid grid-cols-3 gap-3 px-10" data-testid='overview-list'>
        { props.sortedResults?.length && props.sortedResults.map((player: Player, i: number) =>
          <OverviewItem player={player} key={i} onClick={() => {
            props.updatePlayer(player);
          }}/>
        )}
      </div>
    </>
  );
}
