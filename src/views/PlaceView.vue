<template>
  <div>
    <suspense>
      <PlaceViewAsync />
      <template #fallback>
        <PlaceViewSkeleton />
      </template>
    </suspense>
  </div>
</template>
