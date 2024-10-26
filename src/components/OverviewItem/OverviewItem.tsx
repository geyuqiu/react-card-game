import React from "react";
import { Item } from '../../models/item';

interface OverwiewProps {
  item: Item
}

export default function OverviewItem (props: OverwiewProps) {
  const {item} = props;

  return <ul className="dashed">
    <li>{item?.realName}</li>
    <li>{item?.playerName}</li>
    <li>{item?.asset}</li>
  </ul>;
}
