import React from "react";
import Border from '../Border/Border';

interface ButtonProps {
  dataTestId: string;
  onClick: () => void;
  text: string;
}

export default function Button ({dataTestId, onClick, text}: ButtonProps) {
  return (
    <Border className="p-3 m-3 text-center">
      <button data-testid={dataTestId} onClick={onClick}>{text}</button>
    </Border>
  );
}
