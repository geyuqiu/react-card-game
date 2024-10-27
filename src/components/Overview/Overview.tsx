import React from "react";
import { Player } from '../../models/player';
import OverviewItem from '../OverviewItem/OverviewItem';
import Border from '../Border/Border';

export const apiUrl = 'https://opensource.aoe.com/the-card-game-data/player.json';

interface OverviewProps {
  updatePlayer: (newValue: Player) => void;
  sortedResults: Player[] | null;
}

export default function Overview ({updatePlayer, sortedResults}: OverviewProps) {
  return (
    <div>
      <h1 className="px-2 text-4xl font-thin px-6 pb-5">Overview</h1>
      <div className="grid grid-cols-3 gap-4 px-10 max-w-[40%]" data-testid='overview-list'>
        { sortedResults?.length && sortedResults.map((player: Player, i: number) =>
          <Border key={i}>
            <OverviewItem player={player}
                          onClick={() => updatePlayer(player)}
                          className="cursor-pointer"
            />
          </Border>
        )}
      </div>
    </div>
  );
}
