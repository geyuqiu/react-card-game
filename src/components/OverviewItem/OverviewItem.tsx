import React from "react";
import { Player } from '../../models/player';

interface OverviewItemProps {
  player: Player;
  onClick?: () => void;
  dataTestId?: string;
}

export default function OverviewItem (props: OverviewItemProps) {
  const {player, onClick, dataTestId} = props;

  return (
    <ul className="dashed" onClick={onClick} data-testid={dataTestId ? dataTestId : "overview-item-list"}>
      <li>{player?.realName}</li>
      <li>{player?.playerName}</li>
      <li>{player?.asset}</li>
    </ul>
  );
}
