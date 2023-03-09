import { render, screen } from '@testing-library/react';

import { WeatherDescription } from '../../types';
import { Weather } from './Weather';

it('should render sun if it is warm', async () => {
  render(<Weather temperature={30} description={WeatherDescription.WARM} />);
  expect(screen.getByTestId('icon-sun')).toBeDefined();
});

it('should render cloud if it is cold', async () => {
  render(<Weather temperature={10} description={WeatherDescription.COLD} />);
  expect(screen.getByTestId('icon-cloud')).toBeDefined();
});
