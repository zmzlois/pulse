<template>
  <!-- <h2
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
  </h2> -->
  <h2
    class="flex font-arial-black text-9xl sm:h-[10rem] sm:text-[13rem] sm:leading-[9rem] lg:h-[20rem] lg:text-[26.125rem] lg:leading-[18rem]"
  >
    <span
      v-for="(item, index) in title"
      :key="index"
      class="block sm:h-[10rem] lg:h-[20rem]"
      :class="[
        index == 1 ? 'text-ternary' : 'text-white',
        opacity[iteration],
        marginLeft[index],
      ]"
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

const marginLeft = [
  "-ml-2 sm:ml-[-1rem] lg:ml-[-2rem]",
  "-ml-3 sm:ml-[-1.3rem] lg:ml-[-2.8rem]",
  "-ml-2 sm:ml-[-1.5rem] lg:ml-[-2.5rem]",
  "-ml-3 sm:ml-[-1.7rem] lg:ml-[-2.5rem]",
  "-ml-3 sm:ml-[-1.5rem] lg:ml-[-2.9rem]",
];
</script>
