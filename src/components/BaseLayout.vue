<template>
  <div class="flex min-h-screen w-screen flex-col bg-sky-700 text-white">
    <header class="sticky top-0 shadow-md">
      <slot name="header" />
    </header>
    <main class="container my-4 flex-1 rounded-md bg-sky-800 shadow-md">
      <slot />
    </main>
    <footer class="sticky bottom-0 bg-sky-900">
      <slot name="footer" />
    </footer>
  </div>
</template>
