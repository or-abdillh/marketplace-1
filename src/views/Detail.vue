<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import Caraousel from '@/components/Caraousel.vue'
  
  //Instance
  const router = useRouter()
  
  //Heart handler
  const isHeartClicked = ref(false)
  
  //Images
  const images = [
      { src: 'shoes.png', alt: 'Shoes' },
      { src: 'shoes.png', alt: 'Shoes' },
      { src: 'shoes.png', alt: 'Shoes' }
    ]
</script>

<template>
  <!-- Navigation and icons -->
  <section class="flex w-full justify-between">
    <i @click="router.go(-1)" class="fa fa-arrow-left"></i>
    <i 
      @click="isHeartClicked = !isHeartClicked"
      :class="isHeartClicked ? 'fas' : 'far'" 
      class="fa-heart"></i>
  </section>
  
  <Caraousel :images="images" />
</template>