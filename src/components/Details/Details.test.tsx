import React from "react";
import { render, screen } from '@testing-library/react';
import Details from "./Details";

describe('Details', () => {
    test('renders ', () => {
        render(<Details />);

        const linkElement = screen.getByText(/Hello Robert/i);

        expect(linkElement).toBeInTheDocument();
    });
});
