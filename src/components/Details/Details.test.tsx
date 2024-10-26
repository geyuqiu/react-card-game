import React from "react";
import { render } from '@testing-library/react';
import Details from './Details';
import { Item } from '../../models/item';

describe('Details Component', () => {
    it('renders', () => {
        expect(render(
          <Details item={{} as Item}/>
        )).toBeTruthy();
    });
});
