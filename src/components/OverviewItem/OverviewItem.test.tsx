import React from "react";
import { render, screen } from '@testing-library/react';
import OverviewItem from "./OverviewItem";

export const item = {
    realName: 'realName',
    playerName: 'playerName',
    asset: 'asset',
};
describe('OverviewItem', () => {
    test('renders ', () => {
        render(<OverviewItem item={item}/>);

        const linkElement = screen.getByText(item.realName);

        expect(linkElement).toBeInTheDocument();
    });
});
