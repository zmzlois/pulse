<template>
  <div
    class="absolute left-0 top-[-1px] z-10 flex w-full gap-2 bg-background py-1 pb-[0.146rem] pr-2"
  >
    <div
      class="invert-radius 2x:left-10 absolute z-10 block h-12 w-[52vw] skew-x-[-24deg] rounded-2xl bg-background"
    ></div>
    <div class="absolute z-20 flex overflow-hidden bg-background">
      <span
        v-for="(item, index) in splitted"
        :key="index"
        class="go-down block h-10 text-xl font-extrabold tracking-tighter text-accent_2 md:text-4xl"
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
.invert-radius::before {
  content: "";
  position: absolute;
  background-color: transparent;
  bottom: -48px;
  left: 12px;
  border-top-left-radius: 50px;
  height: 50px;
  width: 30px;
  box-shadow: -10px -30px 0 0 black;
}

.invert-radius::after {
  content: "";
  position: absolute;
  background-color: transparent;
  right: -32px;
  top: 0px;
  border-top-left-radius: 30px;
  height: 44px;
  width: 40px;
  box-shadow: 0 -30px 0 0 black;
}
@property --animation-order {
  syntax: "<integer>";
  inherits: false;
  initial-value: 0;
}

.go-down {
  animation-name: go-down;
  animation-duration: 350ms;
  animation-delay: calc((var(--animation-order) * 300ms) + 1000ms);
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
