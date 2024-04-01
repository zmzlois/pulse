<template>
<div class="flex gap-2">
    <Transition
    :key="index" 
    v-for="item, index in splitted"
    id="word-{{ index }}"
    :data-index="index"
    class="text-6xl tracking-tighter font-extrabold   text-accent_2"
   >
     <span :class="[delays[index]]" class="go-down">{{item}}&nbsp;&nbsp;</span> 
    </Transition>
</div>
</template>

<script setup lang="ts">


const sentence = "MED EXAM PREP MADE WELL"
const splitted = sentence.split(' ')

const delays = [
    "delay-[1000ms]",
    "delay-[1300ms]",
    "delay-[1600ms]",
    "delay-[1900ms]",
    "delay-[2100ms]",
]



</script>

<style>
.go-down {
    animation: go-down cubic-bezier(.96,-0.22,.59,.94) 1s ease-in forwards;
}

@keyframes go-down {
    0% {
        transform: translateY(-5rem);
    }
    100% {
        transform: translateY(0)
    }
}

</style>