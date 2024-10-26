import React from "react";
import { Player } from '../../models/player';
import Button from '../Button/Button';

interface ControlsProps {
	player: Player,
	sortResultsAsc: () => void
	sortResultsDesc: () => void
}

export default function Controls(props: ControlsProps) {
	const {player, sortResultsAsc, sortResultsDesc} = props;

	const submit = () => {
		console.log(player);
	}

	return (
		<aside className="basis-2/5 border-white border">
			<h1 className="px-2 text-4xl font-thin"> Controls</h1>
			<div className="flex">
				<Button dataTestId={"sortAsc"} onClick={sortResultsAsc} text={'SORT ASC'}/>
				<Button dataTestId={"sortDesc"} onClick={sortResultsDesc} text={'SORT DESC'}/>
			</div>
			<Button dataTestId={"submit"} onClick={submit} text={'SUBMIT'}/>
		</aside>
	);
}
