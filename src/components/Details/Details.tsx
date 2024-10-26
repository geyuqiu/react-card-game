import React from "react";
import { Player } from '../../models/player';
import OverviewItem from '../OverviewItem/OverviewItem';

interface DetailsProps {
  player: Player
}

export default function Details (props: DetailsProps) {
  return <OverviewItem player={props.player} dataTestId={'details'}/>;
}
