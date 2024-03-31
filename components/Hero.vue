<template>
    <div class="bg-center h-[400px] flex items-center justify-center relative">
      <div v-for="i in 3" 
        :class="getTop[i - 1]"
        class="absolute w-full h-full" >
        
        <HeroTitle :itteration="i - 1"></HeroTitle>
      </div>
    </div>
</template>

<script setup lang="ts">

const getTop = [
  'top-0',
  'top-8',
  'top-16',
]
</script>