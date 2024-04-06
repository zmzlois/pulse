<template>
  <div>
    <NuxtLayout />
    <ClientOnly placeholder="Loading..." fallback-tag="span" v-show="isDev">
      <TailwindIndicator />
    </ClientOnly>
  </div>
</template>
<script>
export default {
  setup() {
    let isDev = true;
    const environment = process.env.NODE_ENV;
    console.log("environment:", environment);

    if (environment === "development") {
      isDev = true;
    } else {
      isDev = false;
    }
    return { isDev };
  },
};
</script>
