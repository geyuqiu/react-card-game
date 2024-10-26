import React from "react";
import { Item } from '../../models/item';
import OverviewItem from '../OverviewItem/OverviewItem';

interface DetailsProps {
  item: Item
}

export default function Details (props: DetailsProps) {
  return <OverviewItem item={props.item} dataTestId={'details'}/>;
}
