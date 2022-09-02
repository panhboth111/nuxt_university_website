<template>
  <div
    class="flex flex-col items-start justify-center h-96 bg-no-repeat bg-cover bg-center md:px-20 px-4"
    :style="{
      backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url('${image}')`,
    }"
  >
    <div
      data-aos="fade-up"
      data-aos-duration="1400"
      class="text-white uppercase text-xs md:leading-9 leading-5"
    >
      {{ subtitle }} <br /><span class="md:text-2xl text-lg font-extrabold">{{
        title
      }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    subtitle: String,
    title: String,
  },
};
</script>

<style lang="scss" scoped></style>
