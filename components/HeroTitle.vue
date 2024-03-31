<template>
    <div class="w-full h-full flex items-center justify-center">
        <div
            :class="zIndex[itteration].overlay"
            class="bg-background w-full h-80 absolute">
        </div>

        <h2 v-for="(item, index) in title" 
                :key="index" 
                :class="zIndex[itteration].title" 
                class="text-[24rem] font-extrabold tracking-tight bg-clip-text bg-gradient-to-r from-linear_from to-linear_to text-transparent">
                <span 
                    :class="[index == 1 ? 'text-ternary' : 'text-white', opacity[itteration]]"
                >{{item}}</span>
        </h2>
    </div>
</template>

<script setup lang="ts">
    defineProps<{
        itteration: number
    }>()
    const title = 'PULSE'

    const zIndex = [
        {'overlay': 'z-40','title': 'z-50'},
        {'overlay': 'z-20','title': 'z-30'},
        {'overlay': 'z-0','title': 'z-10'},
    ]

    const opacity = [
        'opacity-100',
        'opacity-70',
        'opacity-40'
    ]

</script>