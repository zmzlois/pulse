<template>
  <div class="container mx-auto w-full">
    <div class="relative text-white">
      <HeroSubtitle />

      <div
        class="relative block aspect-[60/31] w-full overflow-hidden rounded-3xl"
      >
        <video
          autoplay
          muted
          loop
          playsinline
          class="absolute inset-0 bottom-0 top-auto h-[150%] w-full overflow-clip object-cover"
          style="
            transform: translate3d(0px, 27.6994%, 0px);
            overflow-clip-margin: content-box;
          "
        >
          <source
            src="https://d3v5naxe3z2qca.cloudfront.net/doctor-ask.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  </div>
</template>
