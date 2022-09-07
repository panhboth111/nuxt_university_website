<template>
  <div class="md:px-20 px-4 pt-16">
    <Title
      :title="$t('about.location_section.title')"
      color_title="text-primary"
    />

    <div
      data-aos="fade-up"
      data-aos-duration="1700"
      class="text-xs leading-6 font-extralight text-gray-600 my-5 text-justify"
    >
      <div class="py-3">
        {{ $t("about.location_section.description") }}
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
