<script setup>
   
   import { ref } from 'vue'
   import Header from '@/components/Header.vue'
   import SearchBar from '@/components/SearchBar.vue'
   import Badge from '@/components/Badge.vue'
   
   //Categorys
   const categorys = ['All', 'Nike', 'Adidas', 'Puma']
   const currentCategory = ref(categorys[0])
</script>

<template>
	<!-- This is Header -->
	<Header></Header>
	<!-- This is SearchBar -->
	<SearchBar></SearchBar>
	<!-- This is categorys -->
	<section class="flex overflow-scroll justify-between gap-3">
   	<template v-for="(category, index) in categorys" :key="index">
   	   <Badge 
   	      @click="currentCategory = category"
   	      :active="currentCategory === category" 
   	      :label="category" />
   	</template>
	</section>
</template>

<style scoped>
   
   * {
      -ms-overflow-style: none;
      scrollbar-width: none;
   }
   
   *::-webkit-scrollbar {
     display: none;
   }
   
</style>