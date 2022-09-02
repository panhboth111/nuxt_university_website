<template>
  <div data-aos="zoom-in" data-aos-duration="1300">
    <div :class="`uppercase md:text-base text-sm font-bold ${color_title}`">
      {{ title }}
    </div>
    <div class="flex justify-start mt-2">
      <hr class="w-12 border-b border-gray-400" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    color_title: String,
  },
};
</script>

<style lang="scss" scoped></style>
