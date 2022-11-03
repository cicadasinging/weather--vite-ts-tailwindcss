import { getPlacesLocalStorage, setPlacesLocalStorage } from "@/utils/usePlacesLocalStorage";
import type { IPlace } from "@/types/place";

export default defineStore("places", {
  state: () => ({
    place: {},
    preview: true,
    places: getPlacesLocalStorage(),
  }),
  actions: {
    setPlaces(v: Array<IPlace>) {
      this.places = v;
      setPlacesLocalStorage(v);
    },
  },
});
