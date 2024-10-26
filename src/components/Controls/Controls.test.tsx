import React from "react";
import { render, screen } from '@testing-library/react';
import Controls from "./Controls";

describe('Controls', () => {
    test('renders ', () => {
        render(<Controls />);

        const linkElement = screen.getByText(/Hello Robert/i);

        expect(linkElement).toBeInTheDocument();
    });
});
