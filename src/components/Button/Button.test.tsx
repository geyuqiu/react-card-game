import React from "react";
import { render, screen } from '@testing-library/react';
import Button from "./Button";

describe('Button', () => {
    test('renders ', () => {
        render(<Button dataTestId="test" onClick={() => {}} text="click me"/>);

        const linkElement = screen.getByText('click me');

        expect(linkElement).toBeInTheDocument();
    });
});
