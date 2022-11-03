<template>
  <div class="mt-4 w-full rounded-md p-4 shadow-md">
    <ul v-if="placesStore.places.length !== 0">
      <li v-for="i in placesStore.places" :key="i.id" class="relative flex items-center">
        <span class="cursor-pointer rounded-md p-2 hover:bg-sky-900" @click="routePlace(i)">{{ i.place_name }}</span>
        <material-symbols-wrong-location-rounded
          class="absolute right-2 h-5 w-5 duration-150 hover:scale-125 hover:invert"
          @click="removePlace(i)"
        />
      </li>
    </ul>
    <p v-else class="p-2">No data, try to back home page and add a search result.</p>
  </div>
</template>

<script lang="ts" setup>
import usePlacesStore from "@/stores/usePlacesStore";
import usePlaces from "@/composables/usePlaces";

const placesStore = usePlacesStore();
const { routePlace, removePlace } = usePlaces();
</script>
