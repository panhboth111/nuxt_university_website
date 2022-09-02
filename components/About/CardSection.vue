<template>
  <div
    class="h-screen flex flex-col justify-center items-center md:px-8 px-0 md:mb-8"
  >
    <div
      class="bg-center bg-cover bg-no-repeat md:h-4/5 h-full w-full md:rounded rounded-none md:px-12 px-4 flex flex-col justify-center items-start shadow-2xl"
      :style="{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url('${image}')`,
      }"
    >
      <Title :title="title" color_title="text-white" />

      <div
        class="text-white md:text-sm text-xs mt-5"
        data-aos="fade-up"
        data-aos-duration="1800"
      >
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script>
import Title from "~/components/Reusables/Title.vue";
export default {
  components: {
    Title,
  },
  props: {
    description: String,
    image: String,
    title: String,
  },
};
</script>

<style lang="scss" scoped></style>
