import React from "react";
import Border from '../Border/Border';

interface ButtonProps {
  dataTestId: string;
  onClick: () => void;
  text: string;
}

export default function Button ({dataTestId, onClick, text}: ButtonProps) {
  return (
    <Border className="p-2 text-center m-2">
      <button data-testid={dataTestId} onClick={onClick}>{text}</button>
    </Border>
  );
}
