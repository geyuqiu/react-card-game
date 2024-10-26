import React from "react";
import { Player } from '../../models/player';

interface ControlsProps {
	player: Player,
	sortResultsAsc: () => void
	sortResultsDesc: () => void
}

export default function Controls(props: ControlsProps) {
	const submit = () => {
		console.log(props.player);
	}

	return (
		<aside>
			<button data-testid="sortAsc" onClick={() => props.sortResultsAsc()}>SORT ASC</button>
			<button data-testid="sortDesc" onClick={() => props.sortResultsDesc()}>SORT DESC</button>
			<button data-testid="submit" onClick={() => submit()}>SUBMIT</button>
		</aside>
	);
}
