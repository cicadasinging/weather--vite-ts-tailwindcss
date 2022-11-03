<template>
  <div class="pt-4">
    <div class="relative flex items-center">
      <icon-park-outline-local class="absolute left-0 h-5 w-5" />
      <input
        v-model.trim="searchModel"
        class="w-full border-b bg-transparent py-2 pl-7 focus:border-b-sky-900 focus:outline-none focus:drop-shadow-md"
        placeholder="Search for a city or state"
        @input="searchPlace"
      />
    </div>
    <div v-if="searchSuccess" class="search-result">
      <ul v-if="searchResults.length !== 0">
        <li
          v-for="i in searchResults"
          :key="i.id"
          class="cursor-pointer rounded-md p-2 hover:bg-sky-900"
          @click="
            routePlace({
              id: i.id,
              place_name: i.place_name,
              lon: i.geometry.coordinates[0],
              lat: i.geometry.coordinates[1],
            })
          "
        >
          {{ i.place_name }}
        </li>
      </ul>
      <p v-else class="p-2">No results match your search, try a different term.</p>
    </div>
    <div v-if="searchError" class="search-result">
      <p class="p-2">Sorry, something went wrong, please try again.</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import getPlaceData from "@/apis/getPlaceData";
import usePlaces from "@/composables/usePlaces";

const searchModel = ref("");
const searchSuccess = ref(false);
const searchResults = ref([]);
const searchError = ref(false);
const searchPlace = debounce(() => {
  if (searchModel.value) {
    getPlaceData(searchModel.value)
      .then((r) => {
        searchResults.value = r.features;
        searchSuccess.value = true;
        searchError.value = false;
      })
      .catch(() => {
        searchSuccess.value = false;
        searchError.value = true;
      });
  }
}, 500);
const { routePlace } = usePlaces();
</script>

<style scoped>
.search-result {
  @apply w-full rounded-md py-4 shadow-md;
}
</style>
