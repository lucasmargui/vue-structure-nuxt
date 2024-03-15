<template>
  <div>
    <header class= "shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <div class="logo">
          <p class="font-bold">Nuxt</p>
        </div>
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products">Products</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<style scoped>

</style>
