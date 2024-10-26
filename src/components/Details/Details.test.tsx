import React from "react";
import { render } from '@testing-library/react';
import Details from './Details';
import { Player } from '../../models/player';

describe('Details Component', () => {
    it('renders', () => {
        expect(render(
          <Details player={{} as Player}/>
        )).toBeTruthy();
    });
});
