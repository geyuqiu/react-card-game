import React from "react";
import { render, screen } from '@testing-library/react';
import Border from "./Border";

describe('Border', () => {
    test('renders ', () => {
        // eslint-disable-next-line react/no-children-prop
        render(<Border children={<p>test</p>} className="p-2"/>);

        const linkElement = screen.getByText('test');

        expect(linkElement).toBeInTheDocument();
    });
});
