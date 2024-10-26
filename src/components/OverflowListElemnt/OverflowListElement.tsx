import React from "react";

interface OverflowListElementProps {
  text: string;
}

export default function OverflowListElement ({text}: OverflowListElementProps) {
  return <li className="overflow-hidden whitespace-nowrap text-ellipsis">{text}</li>;
}
