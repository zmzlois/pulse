<template>
  <div class="flex gap-2">
    <div class="flex">
      <span
        v-for="(item, index) in splitted"
        :key="index"
        class="go-down text-accent_2 text-4xl tracking-tighter font-extrabold block"
        :style="`--animation-order: ${index}`"
        >{{ item }}&nbsp;&nbsp;</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
const sentence = "MED EXAM PREP MADE WELL";
const splitted = sentence.split(" ");
// TODO: They are not animated by sequence, how to fix this?
</script>

<style>
.go-down {
  animation-name: go-down;
  animation-duration: 350ms;
  animation-delay: calc(var(--animation-order) * 3000);
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
}

@keyframes go-down {
  0% {
    opacity: 0;
    transform: translateY(-5rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
