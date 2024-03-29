<template>
    <header class="h-36 w-full flex items-center justify-between">
        <IconsIconLogo :width="60" :height="60"></IconsIconLogo>
      <a href="/" class="bg-ternary text-white items-center text-background px-4 py-2 flex justify-between rounded-2xl gap-2">
        <span class="font-bold text-base tracking-tight ">Download Now</span>
        <ChevronRight width="60" height="60"></ChevronRight>
      </a>
    </header>
</template>
<script setup lang="ts">
import ChevronRight from "~/components/icons/ChevronRight.vue";
</script>