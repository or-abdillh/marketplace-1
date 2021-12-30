<template>
   <section class="flex gap-2">
      <input class="search-bar" type="search" name="search" id="search" placeholder="Find your shoes here" />
      <button type="button" class="w-2/12 rounded-lg bg-gray-900 text-gray-50 p-1">
         <i class="fa fa-search"></i>
      </button>
   </section>
</template>

<style scoped>
   
   .search-bar {
      @apply text-sm w-10/12 bg-white p-2 rounded-lg border border-4 border-gray-400;
   }
   
   .search-bar::placeholder {
      @apply text-sm;
   }
</style>