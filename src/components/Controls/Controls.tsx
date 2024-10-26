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
		<>
			<button onClick={() => props.sortResultsAsc()}>SORT ASC</button>
			<button onClick={() => props.sortResultsDesc()}>SORT DESC</button>
			<button onClick={() => submit()}>SUBMIT</button>
		</>
	);
}
