import React from "react";
import { render, screen } from '@testing-library/react';
import OverviewItem from "./OverviewItem";

describe('OverviewItem', () => {
    test('renders ', () => {
        render(<OverviewItem />);

        const linkElement = screen.getByText(/Hello Robert/i);

        expect(linkElement).toBeInTheDocument();
    });
});
