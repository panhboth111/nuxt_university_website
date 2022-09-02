<template>
  <div class="md:px-20 px-4 pt-16">
    <Title title="Our Community" color_title="text-primary" />

    <div
      data-aos="fade-up"
      data-aos-duration="1700"
      class="text-xs leading-6 font-extralight text-gray-600 my-5 text-justify"
    >
      <div class="py-3">
        vKirirom Nature Land, Cambodia envisions building a city of the future.
        It believes in building a community that creates an environment of
        co-working and co-living with nature.
      </div>
      <div class="py-3">
        “Vibrant community combining cutting-edge technology, leading
        university, and sustainability amidst the forest and mountain of
        Cambodia’s national park.”
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
};
</script>

<style lang="scss" scoped></style>
