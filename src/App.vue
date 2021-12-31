<script setup>
   import Navbar from '@/components/Navbar.vue'   
</script>

<template>
	<main class="app">
		<router-view></router-view>
		<Navbar></Navbar>
	</main>
</template>

<style scoped>
   
   .app {
      @apply p-5 w-full h-screen bg-white;
   }
   
</style>
