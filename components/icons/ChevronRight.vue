<template>
  <svg :width="width" :height="height" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.4583 11.6666L25.2916 17.5L19.4583 23.3333M10.7083 11.6666L16.5416 17.5L10.7083 23.3333" stroke="black" stroke-width="2.91667" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<script setup lang="ts">
    defineProps<{
    width: number
    height: number
    }>()

</script>