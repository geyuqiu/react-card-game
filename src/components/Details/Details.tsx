import React from "react";
import { Player } from '../../models/player';
import OverviewItem from '../OverviewItem/OverviewItem';

interface DetailsProps {
  player: Player
}

export default function Details (props: DetailsProps) {
  return (
    <div className="basis-3/5 mr-3">
      <OverviewItem player={props.player} dataTestId={'details'} title={'Details'}/>
    </div>
  );
}
