interface IWeatherMain {
  feels_like: number;
}

interface IWeatherWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface IWeather {
  id: number;
  main: IWeatherMain;
  weather: IWeatherWeather;
}
