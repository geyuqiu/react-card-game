import React, { useEffect, useState } from "react";
import { useFetch } from '../../hooks/useFetch';

interface Temperature {
  temp: number;
  temp_min: number;
  temp_max: number;
}

const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Munich,de&units=metric&APPID=faf17d6bfe1477a97755d5134779e59c';

interface Main {
  main: Temperature;
}

export const temperatur = {
  temp: 2,
  temp_min: 1,
  temp_max: 3
}
export default function Weather () {
  const {loading, result, error} = useFetch(apiUrl);
  const temperature = result
    ? (result as Main).main
    : null;

  return (
    <>
      { loading && !error && <h1 role='loading'>Loading</h1>}
      { temperature && temperature.temp && temperature.temp < 20  && <h1>München ist kalt</h1>}
      { temperature && temperature.temp && temperature.temp >= 20  && <h1>München ist warm</h1>}
      { temperature &&
        <>
          <p>Aktuelle Temperatur: {temperature?.temp}</p>
          <p>Min. Temperatur: {temperature?.temp_min}</p>
          <p>Max. Temperatur: {temperature?.temp_max}</p>
        </>
      }
      { error && <p className='border-red-500'>error: {error.message} </p>}
    </>

  );
}
