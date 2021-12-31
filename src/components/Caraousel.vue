<script setup>
  import { Splide, SplideSlide } from '@splidejs/vue-splide';
  import '@splidejs/splide/dist/css/splide.min.css';
</script>

<template>
  <Splide :options="{ rewind: true }">
    <SplideSlide>
      <img src="shoes.png" alt="Sample 1">
    </SplideSlide>
    <SplideSlide>
      <img src="shoes.png" alt="Sample 2">
    </SplideSlide>
  </Splide>
</template>