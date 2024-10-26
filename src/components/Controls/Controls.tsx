import React from "react";
import { Player } from '../../models/player';
import Button from '../Button/Button';
import Border from '../Border/Border';

interface ControlsProps {
	player: Player,
	sortResultsAsc: () => void
	sortResultsDesc: () => void
}

export default function Controls({player, sortResultsAsc, sortResultsDesc}: ControlsProps) {
	const submit = () => {
		console.log(player);
	}

	return (
		<Border>
			<h1 className="px-2 text-4xl font-thin">Controls</h1>
			<div className="flex">
				<Button dataTestId={"sortAsc"} onClick={sortResultsAsc} text={'SORT ASC'}/>
				<Button dataTestId={"sortDesc"} onClick={sortResultsDesc} text={'SORT DESC'}/>
			</div>
			<Button dataTestId={"submit"} onClick={submit} text={'SUBMIT'}/>
		</Border>
	);
}
