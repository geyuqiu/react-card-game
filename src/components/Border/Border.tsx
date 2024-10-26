import React from "react";
import clsx from 'clsx';

interface BorderProps {
	children: React.ReactNode,
	className?: string
}

export default function Border({children, className}: BorderProps) {
	return <div
		className={clsx(
			className,
			"border border-white"
		)}
	>{children}</div>;
}
