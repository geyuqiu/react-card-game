import React from "react";
import { Item } from '../../models/item';

interface OverviewItemProps {
  item: Item;
  onClick?: () => void;
}

export default function OverviewItem (props: OverviewItemProps) {
  const {item, onClick} = props;

  return <ul className="dashed" onClick={onClick}>
    <li>{item?.realName}</li>
    <li>{item?.playerName}</li>
    <li>{item?.asset}</li>
  </ul>;
}
