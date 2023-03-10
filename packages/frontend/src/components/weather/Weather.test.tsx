import { render, screen } from '@testing-library/react';

import { WeatherState } from '../../types';
import { Weather } from './Weather';

it('should render sun if it is warm', async () => {
  render(<Weather temperature={30} description={WeatherState.WARM} icon={'sun'} />);
  expect(screen.getByTestId('icon-sun')).toBeDefined();
});

it('should render cloud if it is cold', async () => {
  render(<Weather temperature={10} description={WeatherState.COLD} icon={'cloud'} />);
  expect(screen.getByTestId('icon-cloud')).toBeDefined();
});
