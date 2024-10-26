import React from "react";
import { render, screen, waitFor } from '@testing-library/react';
import Overview from "./Overview";
import { item } from '../OverviewItem/OverviewItem.test';

describe('Overview', () => {
    test('renders overview-list', async () => {
        let mockOverviewItems = [
            item
        ];
        global.fetch = jest.fn().mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue(mockOverviewItems)
        });
        render(<Overview updateItem={() => {}}/>);

        await waitFor(() => {
            expect(screen.getAllByTestId('overview-list').length)
              .toEqual(1);
        });
    });
});
