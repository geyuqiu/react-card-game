import React from "react";
import { Item } from '../../models/item';

interface ControlsProps {
  item: Item
}

export default function Controls (props: ControlsProps) {
  const submit = () => {
    console.log(props.item);
  }

  return (
    <>
      <button>SORT ASC</button>
      <button>SORT DESC</button>
      <button onClick={() => submit()}>SUBMIT</button>
    </>
  );
}
