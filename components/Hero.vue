<template>
    <div class=" bg-center h-[400px] flex items-center justify-center">

      <h2 v-for="(item, index) in letters" :key="index" :class="{}" class="text-[24rem] text-white font-extrabold tracking-tight">{{item.letter}}</h2>


    </div>
</template>

<script setup lang="ts">

// TODO: 1. render text color based on different conditions
// 2. Use absolute and relative position to stack five layers text -> div -> text -> div -> text
// 3. on page load ease in the text from layer 1 with sequence
const letters = [ {
    letter: 'P',
    color: false,
},
  {
    letter: "U",
    color: true,
  },
  {
    letter: "L",
    color: false,
  },
  {
    letter: "S",
    color: false,
  },
  {
    letter: "E",
    color: false,
  }
]

</script>