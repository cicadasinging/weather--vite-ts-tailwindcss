const _URL = "https://api.openweathermap.org/data/2.5/weather";
const _APPID = "7efa332cf48aeb9d2d391a51027f1a71";
const _UNIT = "imperial"; // 英制

export default async <T>(lon: number, lat: number): Promise<T> => {
  // console.log(`${_URL}?lon=${lon}&lat=${lat}&appid=${_APPID}&units=${_UNIT}`);
  return await request.get(`${_URL}?lon=${lon}&lat=${lat}&appid=${_APPID}&units=${_UNIT}`);
};
