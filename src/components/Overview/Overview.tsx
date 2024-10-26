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
    <div data-testid='overview-list'>
      { props.sortedResults?.length && props.sortedResults.map((player: Player, i: number) =>
        <OverviewItem player={player} key={i} onClick={() => {
          props.updatePlayer(player);
        }}/>
      )}
    </div>
  );
}
