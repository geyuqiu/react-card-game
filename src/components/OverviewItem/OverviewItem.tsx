import React from "react";
import { Player } from '../../models/player';

interface OverviewItemProps {
	title?: string;
	player: Player;
	onClick?: () => void;
	dataTestId?: string;
}

export default function OverviewItem({player, onClick, dataTestId, title}: OverviewItemProps) {
	return (
		// <Border>
			<div className="rounded overflow-hidden shadow-lg flex flex-col">
				{title ? <h1 className="px-2 text-4xl font-thin">{title}</h1> : ''}
				<div className="px-2 py-2 mb-auto">
					<ul className="dashed" onClick={onClick} data-testid={dataTestId ? dataTestId : "overview-item-list"}>
						<li>{player?.realName}</li>
						<li>{player?.playerName}</li>
						<li>{player?.asset}</li>
					</ul>
				</div>
			</div>
		// </Border>
	)
		;
}
