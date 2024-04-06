<template>
  <div
    class="fixed bottom-0 left-0 bg-teal-300 text-zinc-900 text-sm px-2 rounded-sm drop-shadow"
  >
    Media size: {{ value }} - width:{{ innerWidth }}
  </div>
</template>

<script>
export default {
  setup() {
    const innerWidth = window.innerWidth;
    let value = "";

    if (innerWidth < 640) {
      value = "xs";
    } else if (innerWidth < 768) {
      value = "sm";
    } else if (innerWidth < 1024) {
      value = "md";
    } else if (innerWidth < 1280) {
      value = "lg";
    } else if (innerWidth < 1536) {
      value = "xl";
    } else if (innerWidth < 1920) {
      value = "2xl";
    } else {
      value = "3xl";
    }
    return { value, innerWidth };
  },
};
</script>
