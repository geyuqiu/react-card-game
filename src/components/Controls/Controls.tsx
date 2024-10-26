import React from "react";
import { Item } from '../../models/item';

interface ControlsProps {
	item: Item,
	sortResultsAsc: () => void
	sortResultsDesc: () => void
}

export default function Controls(props: ControlsProps) {
	const submit = () => {
		console.log(props.item);
	}

	return (
		<>
			<button onClick={() => props.sortResultsAsc()}>SORT ASC</button>
			<button onClick={() => props.sortResultsDesc()}>SORT DESC</button>
			<button onClick={() => submit()}>SUBMIT</button>
		</>
	);
}
