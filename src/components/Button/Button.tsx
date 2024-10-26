import React from "react";

interface ButtonProps {
  dataTestId: string;
  onClick: () => void;
  text: string;
}

export default function Button (props: ButtonProps) {
  const {dataTestId, onClick, text} = props;
  return (
    <button data-testid={dataTestId} onClick={onClick}>{text}</button>
  );
}
