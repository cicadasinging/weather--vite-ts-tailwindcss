<template>
  <nav class="container flex flex-col items-center gap-4 py-6 sm:flex-row sm:justify-between">
    <router-link :to="{ name: 'HomeView' }">
      <div class="flex cursor-pointer items-center gap-2 text-2xl duration-150 hover:invert">
        <icon-park-outline-sunrise class="h-7 w-7" />
        <p class="text-2xl">The Local Weather</p>
      </div>
    </router-link>
    <div class="flex items-center gap-2">
      <material-symbols-info-rounded class="nav-right" @click="toggleInfo" />
      <material-symbols-playlist-add-check-circle-rounded class="nav-right" @click="listPlaces" />
    </div>
    <TheInfo :active="active" @close="toggleInfo" />
  </nav>
</template>

<script lang="ts" setup>
const active = ref(false);
const toggleInfo = () => (active.value = !active.value);
const router = useRouter();
const listPlaces = () => router.push({ name: "PlacesView" });
</script>

<style scoped>
.nav-right {
  @apply h-5 w-5 cursor-pointer duration-150 hover:scale-125 hover:invert;
}
</style>
