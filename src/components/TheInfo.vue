<template>
  <Teleport to="body">
    <Transition name="info-outer">
      <div
        v-show="active"
        class="absolute top-0 left-0 flex h-screen w-full justify-center bg-black bg-opacity-30 px-8"
      >
        <Transition name="info-inner">
          <div v-if="active" class="mt-24 max-w-screen-md self-start rounded-md bg-white p-4">
            <div class="text-black">
              <h1 class="mb-2 text-2xl">About:</h1>
              <p class="mb-4">The Local Weather allows you to track the current weather of cities of your choosing.</p>
              <h2 class="mb-2 text-2xl">How it works:</h2>
              <ol class="mb-4 list-inside list-decimal">
                <li>Search for your city by entering the name into the search bar.</li>
                <li>Select a city within the results, this will take you to the current weather for your selection.</li>
                <li>
                  Track the city by clicking on the "+" icon in the top right. This will save the city to list view at a
                  later time on the home page.
                </li>
              </ol>
              <h2 class="mb-2 text-2xl">Removing a city</h2>
              <p>
                If you no longer wish to track a city, simply select the city within the list page. At the right of the
                city, there will be an "x" icon to delete the city.
              </p>
            </div>
            <button class="mt-8 rounded-md bg-sky-700 py-2 px-4 text-white hover:bg-sky-800" @click="$emit('close')">
              Close
            </button>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts" setup>
defineProps<{ active: boolean }>();
defineEmits<{ (e: "close"): void }>();
</script>

<style scoped>
.info-outer-enter-active,
.info-outer-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.info-outer-enter-from,
.info-outer-leave-to {
  opacity: 0;
}

.info-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.info-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.info-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.info-inner-leave-to {
  transform: scale(0.8);
}
</style>
