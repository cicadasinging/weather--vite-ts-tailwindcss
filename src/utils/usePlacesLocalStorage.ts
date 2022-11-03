import type { IPlace } from "@/types/place";

const _localKey = "placesLocalStorage";

export function getPlacesLocalStorage(): Array<IPlace> {
  return JSON.parse(localStorage.getItem(_localKey) ? (localStorage.getItem(_localKey) as string) : "[]");
}

export function setPlacesLocalStorage(v: Array<IPlace>) {
  localStorage.setItem(_localKey, JSON.stringify(v));
}

export function removePlacesLocalStorage() {
  localStorage.removeItem(_localKey);
}
