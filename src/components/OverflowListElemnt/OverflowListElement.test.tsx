import React from "react";
import { render, screen } from '@testing-library/react';
import OverflowListElement from "./OverflowListElement";

describe('OverflowListElemnt', () => {
    test('renders ', () => {
        render(<OverflowListElement text='text'/>);

        const linkElement = screen.getByText('text');

        expect(linkElement).toBeInTheDocument();
    });
});
