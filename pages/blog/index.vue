<template>
  <div class="text-white" ref="wrapper">
    {{ data?.body.message }} Blog index page
  </div>
</template>
<script setup lang="ts">
const something = useFoo();
console.log("something:", something);

const { data, pending, error, refresh } = useLazyFetch("/api/hello");

const wrapper = ref<HTMLElement>(); // THIS IS A SIGNAL

function handleScroll() {
  console.log("scrolling");
}

// whatever onMount is returned it will be returned forever
// only run ones
onMounted(async () => {
  await nextTick();

  // passive true will increase performance magically
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  if (window) {
    window.removeEventListener("scroll", handleScroll);
  }
});

watch(
  () => data,
  (newData) => {
    console.log("newData:", newData);
  },
);

watchEffect(() => {
  // do something
});
</script>
