<template>
    <component :is="component" :to="to" class="cursor-pointer bg-ternary items-center text-background h-[5.0625rem] px-4 flex justify-between rounded-tl-[2.25rem] rounded-br-[2.25rem] gap-2">
        <span class="font-rubik-mono text-2xl tracking-[-.11rem] uppercase">{{text}}</span>
        <ChevronRight :width="35" :height="35"></ChevronRight>
    </component>
</template>

<script setup lang="ts">
import ChevronRight from "~/components/icons/ChevronRight.vue";

const props = defineProps<{
    text: string,
    to?: string
}>()

const component = computed(() => {
  if (props.to) return defineNuxtLink({})
  return 'button'
})

</script>