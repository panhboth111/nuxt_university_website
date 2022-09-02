<template>
  <!-- background image for hero section which takes up the whole screen -->
  <div
    :style="{
      backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${'/home/hero2.jpeg'})`,
    }"
    class="h-screen bg-no-repeat bg-cover overlay-bg flex items-center justify-center"
  >
    <!-- the text for the hero section-->
    <div class="text-white text-center w-hero_text">
      <!-- main text -->
      <div class="font-bold lg:text-5xl text-3xl">
        LIFT CHANGING OPPORTUNITY. <br />
        INNOVATING THE WORLD. <br />
        BECOME ONE OF US. <br />
      </div>
      <!-- subtitle text -->
      <div class="font-thin">WELCOME TO OUR UNIVERSITY</div>
      <div class="mt-4">
        <nuxt-link to="/contact">
          <button
            class="bg-primary hover:bg-opacity-0 border border-primary px-10 py-2 text-white hover:text-primary mr-2 transition ease-in-out duration-700"
          >
            INQUIRE NOW
          </button>
        </nuxt-link>
        <nuxt-link to="/about">
          <button
            class="border border-white hover:bg-white hover:text-black px-10 py-2 transition ease-in-out duration-700"
          >
            ABOUT US
          </button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
