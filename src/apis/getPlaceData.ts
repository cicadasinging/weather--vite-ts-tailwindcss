import apis from "@/apis";

const _URL = "https://api.mapbox.com/geocoding/v5/mapbox.places";
const _TOKEN = "pk.eyJ1Ijoiam9obmtvbWFybmlja2kiLCJhIjoiY2t5NjFzODZvMHJkaDJ1bWx6OGVieGxreSJ9.IpojdT3U3NENknF6_WhR2Q";
const _TYPE = "place";

export default async <T>(place: string): Promise<T> => {
  // console.log(`${_URL}/${place}.json?access_token=${_TOKEN}&types=${_TYPE}`);
  return await apis.get(`${_URL}/${place}.json?access_token=${_TOKEN}&types=${_TYPE}`);
};
