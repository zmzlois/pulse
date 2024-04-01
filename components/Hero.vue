<template>
    <div class="bg-center h-[400px] flex items-center justify-center relative pt-16">
      <div v-for="i in 3" 
        class="absolute w-full flex items-end justify-center translate-y-[11.5rem] overflow-hidden"
        :class="[animations[i - 1], overlayHeight[i - 1]]" >
        
        <HeroTitle :itteration="i - 1"></HeroTitle>
      </div>
    </div>
</template>

<script setup lang="ts">

const animations = [
  '',
  'go-up-8',
  'go-up-16'
]

const overlayHeight = [
        'h-8',
        'h-8',
        'h-full'
    ]

</script>

<style>
.go-up-16 {
  animation: go-up-16 cubic-bezier(.96,-0.22,.59,.94) 1s forwards;
}

.go-up-8 {
  animation: go-up-8 cubic-bezier(.96,-0.22,.59,.94) 1s forwards;

}

@keyframes go-up-16 {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-5rem)
  }
}

@keyframes go-up-8 {
  0% {
    transform: translateY(11.5rem);
  }
  100% {
    transform: translateY(9rem)
  }
}



</style>