import React from "react";
import { render, screen } from '@testing-library/react';
import Weather, { temperatur } from "./Weather";

describe('Weather', () => {
    test('renders cold', async () => {
      const mockTemperature = {
        main: temperatur
      };
      global.fetch = jest.fn().mockResolvedValue({
          ok: true,
          json: jest.fn().mockResolvedValue(mockTemperature)
      });

      render(<Weather />);

      expect(await screen.findByText(/München ist kalt/i)).toBeInTheDocument();
    });

    test('renders hot', async () => {
      const mockTemperature = {
        main: {
          temp: 25,
          temp_min: 24,
          temp_max: 26
        }
      };
      global.fetch = jest.fn().mockResolvedValue({
          ok: true,
          json: jest.fn().mockResolvedValue(mockTemperature)
      });

      render(<Weather />);

      expect(await screen.findByText(/München ist warm/i)).toBeInTheDocument();
    });
});
