import type { IPlace } from "@/types/place";

export default () => {
  const router = useRouter();
  const placesStore = usePlacesStore();

  const addPlace = (v: IPlace) => {
    const places = placesStore.places;
    if (!places.some((i) => i.id === v.id)) {
      places.push(v);
      placesStore.setPlaces(places);
      placesStore.preview = false;
    }
  };

  const removePlace = (v: IPlace) => {
    const updatedPlaces = placesStore.places.filter((i) => i.id !== v.id);
    placesStore.setPlaces(updatedPlaces);
    placesStore.preview = true;
  };

  const routePlace = (v: IPlace) => {
    const [city, state] = v.place_name.split(",");
    placesStore.place = v;
    placesStore.preview = !placesStore.places.some((i) => i.id === v.id);
    router.push({
      name: "PlaceView",
      params: { city: city.trim(), state: state.trim() },
    });
  };

  return { addPlace, removePlace, routePlace };
};
