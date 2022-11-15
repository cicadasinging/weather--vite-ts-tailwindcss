<template>
  <suspense>
    <PlaceViewAsync />
    <template #fallback>
      <PlaceViewSkeleton />
    </template>
  </suspense>
</template>
