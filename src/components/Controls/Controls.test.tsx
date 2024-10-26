import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import { Item } from '../../models/item';
import Controls from './Controls';

describe('Controls', () => {
    test('renders ', () => {
        expect(render(
          <Controls item={{} as Item} sortResultsAsc={() => {}} sortResultsDesc={() => {}}/>
        )).toBeTruthy();
    });

    it('calls submit function when SUBMIT button is clicked', () => {
        const mockItem: Item = {
            realName: 'John Doe',
            playerName: 'johndoe123',
            asset: 'example-asset.png',
        };

        const consoleLogSpy = jest.spyOn(console, 'log');

        render(<Controls item={mockItem} sortResultsAsc={() => {}} sortResultsDesc={() => {}}/>);

        const submitButton = screen.getByText('SUBMIT');
        fireEvent.click(submitButton);

        expect(consoleLogSpy).toHaveBeenCalledWith(mockItem);

        consoleLogSpy.mockRestore();
    });
});
