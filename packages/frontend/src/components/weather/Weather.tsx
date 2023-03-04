import React from 'react';

import { WeatherResponse } from '../../../../backend/src/types';
import Cloud from '../icons/Cloud';
import Sun from '../icons/Sun';

type Props = WeatherResponse['weather'];

export const Weather = ({ description, temperature }: Props) => {
  return (
    <div className="flex w-1/2 flex-col justify-center items-center">
      <div role="img">{description === 'warm' ? <Sun /> : <Cloud />}</div>
      <div className="text-4xl font-bold">{temperature}°</div>
    </div>
  );
};
