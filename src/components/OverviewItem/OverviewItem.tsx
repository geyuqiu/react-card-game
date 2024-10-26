import React from "react";
import { Player } from '../../models/player';
import OverflowListElement from '../OverflowListElemnt/OverflowListElement';
import clsx from 'clsx';

interface OverviewItemProps {
	title?: string,
	player: Player,
	onClick?: () => void,
	dataTestId?: string,
	className?: string
}

export default function OverviewItem({player, onClick, dataTestId, title, className}: OverviewItemProps) {
	return (
		<div className="rounded flex flex-col pb-9">
			{title ? <h1 className="px-2 text-4xl font-thin">{title}</h1> : ''}
			<div className={clsx(
				"py-2 mb-auto",
				className
			)}>
				<ul className="dashed" onClick={onClick} data-testid={dataTestId ? dataTestId : "overview-item-list"}>
					<OverflowListElement text={player?.realName}/>
					<OverflowListElement text={player?.playerName}/>
					<OverflowListElement text={player?.asset}/>
				</ul>
			</div>
		</div>
	);
}
