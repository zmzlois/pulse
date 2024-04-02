<template>
  <h2
    v-for="(item, index) in title"
    :key="index"
    :class="{ 'rotate-[-3deg] px-[10px]': index === 3 }"
    class="text-[26.125rem] h-[30.3rem] translate-x-8 font-arial-black tracking-[-2.7rem] bg-clip-text bg-gradient-to-br from-linear_from to-linear_to text-transparent"
  >
    <span
      class="block -translate-x-8"
      :class="[index == 1 ? 'text-ternary' : 'text-white', opacity[iteration]]"
      >{{ item }}</span
    >
  </h2>
</template>

<script setup lang="ts">
defineProps<{
  iteration: number;
}>();
const title = "PULSE";

const zIndex = [
  { overlay: "z-40", title: "z-50" },
  { overlay: "z-20", title: "z-30" },
  { overlay: "z-0", title: "z-10" },
];

const opacity = ["opacity-40", "opacity-70", "opacity-100"];
</script>
