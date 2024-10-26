import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./components/Overview/Overview', () => {
  // @ts-ignore
  return ({ updateItem }) => (
    <button onClick={() => updateItem({ realName: 'Jane Doe', playerName: 'janedoe456', asset: 'example-asset-2.png' })}>
      Update Item
    </button>
  );
});

jest.mock('./components/Details/Details', () => {
  // @ts-ignore
  return ({ item }) => <div data-testid="details-item">{item.realName}</div>;
});

describe('App', () => {
  test('renders the app', () => {
    expect(render(
        <App />
    )).toBeTruthy();
  });

  test('shows correct item in Details when updateItem is called', () => {
    render(<App />);

    fireEvent.click(screen.getByText('Update Item'));

    expect(screen.getByTestId('details-item')).toHaveTextContent('Jane Doe'); // Ensure the Details component shows the correct item
  });
})
