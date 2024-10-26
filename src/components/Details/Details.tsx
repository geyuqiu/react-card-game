import React from "react";
import { Player } from '../../models/player';
import OverviewItem from '../OverviewItem/OverviewItem';
import Border from '../Border/Border';

interface DetailsProps {
  player: Player
}

export default function Details ({player}: DetailsProps) {
  return (
    <Border className="min-w-[45%]">
      <OverviewItem player={player} dataTestId={'details'} title={'Details'}/>
    </Border>
  );
}
