<script setup>
  import Caraousel from '@/components/Caraousel.vue'
  
  //Images
  const images = [
      { src: 'shoes.png', alt: 'Shoes' },
      { src: 'shoes.png', alt: 'Shoes' },
      { src: 'shoes.png', alt: 'Shoes' }
    ]
</script>

<template>
  <Caraousel :images="images" />
</template>