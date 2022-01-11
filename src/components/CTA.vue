<script setup>
  
  defineProps({
    text: {
      type: String,
      default: 'The text'
    }
  })
  
</script>

<template>
  
  <button class="mt-5 mb-3 py-1 rounded w-full" type="button">
    {{ text }}
  </button>
  
</template>