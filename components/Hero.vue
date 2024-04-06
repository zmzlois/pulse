<template>
  <div class="flex w-full flex-col-reverse bg-center">
    <!-- <div
      v-for="i in 3"
      class="translate-y-[11.5rem] z-50 overflow-y-hidden overflow-x-clip"
      :class="[animations[i - 1], overlayHeight[i - 1]]"
    >
      <HeroTitle :iteration="i - 1"></HeroTitle>
    </div> -->
    <div
      v-for="i in 3"
      class="z-50 flex items-end overflow-y-hidden overflow-x-clip"
      :class="[animations[i - 1], overlayHeight[i - 1]]"
    >
      <HeroTitle :iteration="i - 1"></HeroTitle>
    </div>
  </div>
  <div class="relative"><HeroVideo /></div>
</template>

<script setup lang="ts">
const animations = ["", "go-up-8", "go-up-16"];

const overlayHeight = ["h-8", "h-8", "h-full"];
</script>

<style>
.go-up-16 {
  animation: go-up-16 cubic-bezier(0.96, -0.22, 0.59, 0.94) 1s forwards;
}

.go-up-8 {
  animation: go-up-8 cubic-bezier(0.96, -0.22, 0.59, 0.94) 1s forwards;
}

@keyframes go-up-16 {
  0% {
    transform: translateY(4rem);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes go-up-8 {
  0% {
    transform: translateY(2rem);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
