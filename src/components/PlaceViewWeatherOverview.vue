<template>
  <div class="main-card relative">
    <div class="absolute right-1.5 top-1.5">
      <div v-if="placesStore.preview">
        <material-symbols-add-location-alt-rounded class="add-remove-icon" @click="$emit('add-place')" />
      </div>
      <div v-else>
        <material-symbols-wrong-location-rounded class="add-remove-icon" @click="$emit('remove-place')" />
      </div>
    </div>
    <div class="flex flex-col items-center">
      <h1 class="mb-2 text-2xl">{{ placesStore.place.place_name }}</h1>
      <img
        :src="`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`"
        alt="Weather Icon"
        class="h-52 w-52"
      />
      <p class="mb-8 text-4xl">{{ Math.round(weatherData.main.temp) }}&#8451;</p>
      <p class="mb-8 capitalize">
        {{ weatherData.weather[0].description }}, Feels like {{ Math.round(weatherData.main.feels_like) }}&#8451;.
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IWeather } from "@/types/weather";

defineProps<{ weatherData: IWeather }>();
defineEmits<{
  (e: "add-place"): void;
  (e: "remove-place"): void;
}>();
const placesStore = usePlacesStore();
</script>

<style scoped>
.add-remove-icon {
  @apply h-5 w-5 duration-150 hover:scale-125 hover:invert;
}
</style>
