import React from "react";
import { render, screen } from '@testing-library/react';
import OverviewItem from "./OverviewItem";

export const player = {
    realName: 'realName',
    playerName: 'playerName',
    asset: 'asset',
};
describe('OverviewItem', () => {
    test('renders ', () => {
        render(<OverviewItem player={player}/>);

        const linkElement = screen.getByText(player.realName);

        expect(linkElement).toBeInTheDocument();
    });
});
