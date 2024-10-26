import React from "react";
import { render, screen, waitFor } from '@testing-library/react';
import Overview from "./Overview";
import { player } from '../OverviewItem/OverviewItem.test';

describe('Overview', () => {
    test('renders overview-list', async () => {
        render(<Overview updatePlayer={() => {}} sortedResults={[
            player
        ]}/>);

        await waitFor(() => {
            expect(screen.getAllByTestId('overview-list').length)
              .toEqual(1);
        });
    });
});
