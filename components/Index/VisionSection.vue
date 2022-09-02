<template>
  <div
    class="flex flex-col h-96 lg:h-screen items-start justify-center bg-no-repeat bg-cover bg-center text-white mb-10 md:px-12 px-4 mx-4 lg:mx-10"
    :style="{
      backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(${'/home/uni.jpeg'})`,
    }"
  >
    <Title title="WHAT IS KIT'S VISION?" color_title="text-white" />

    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      class="md:text-lg text-sm font-extralight text-white my-6 lg:w-home_about"
    >
      A leading science and technology university in Southeast Asia with
      excellent education, cutting-edge research, and a commitment to green
      development and a multicultural community.
    </div>
    <nuxt-link to="/about">
      <button
        class="bg-primary text-xs lg:text-base hover:bg-opacity-0 border border-primary px-4 lg:px-10 py-2 text-white hover:text-primary mr-2 transition ease-in-out duration-700"
      >
        READ MORE
      </button>
    </nuxt-link>
  </div>
</template>

<script>
import Title from "~/components/Reusables/Title.vue";
export default {
  components: {
    Title,
  },
};
</script>

<style lang="scss" scoped></style>
