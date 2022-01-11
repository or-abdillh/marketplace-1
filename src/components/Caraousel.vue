<script setup>
  import { Splide, SplideSlide } from '@splidejs/vue-splide';
  import '@splidejs/splide/dist/css/splide.min.css';
  
  //Props
  const props = defineProps({
    images: {
      type: Array
    }
  })
</script>

<template>
  <Splide :options="{ rewind: true }">
    <!-- Loop images -->
    <template v-for="(img, index) in images" :key="index">
      <SplideSlide>
        <img :src="img.src" :alt="img.alt">
      </SplideSlide>
    </template>
  </Splide>
</template>