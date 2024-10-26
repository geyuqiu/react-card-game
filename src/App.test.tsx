import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

describe('App', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('calls setSortedResults when results are fetched', async () => {
		const mockResults = [
			{ realName: 'John Doe', playerName: 'jdoe', asset: 'Asset 1' },
			{ realName: 'Alice Smith', playerName: 'asmith', asset: 'Asset 2' },
		];

		global.fetch = jest.fn().mockResolvedValue({
			ok: true,
			json: jest.fn().mockResolvedValue(mockResults)
		});

		render(<App />);

		await waitFor(() => {});

		const overviewItems = await screen.findAllByTestId('overview-item-list');
		expect(overviewItems).toHaveLength(mockResults.length);
	});
})
