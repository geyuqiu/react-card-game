import React from "react";
import { Item } from '../../models/item';

interface OverviewItemProps {
  item: Item;
  onClick?: () => void;
  dataTestId?: string;
}

export default function OverviewItem (props: OverviewItemProps) {
  const {item, onClick, dataTestId} = props;

  return <ul className="dashed" onClick={onClick} data-testid={dataTestId ? dataTestId : "overview-item-list"}>
    <li>{item?.realName}</li>
    <li>{item?.playerName}</li>
    <li>{item?.asset}</li>
  </ul>;
}
