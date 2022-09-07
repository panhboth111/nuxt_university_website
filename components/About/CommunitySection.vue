<template>
  <div class="md:px-20 px-4 pt-16">
    <Title
      :title="$t('about.community_section.title')"
      color_title="text-primary"
    />

    <div
      data-aos="fade-up"
      data-aos-duration="1700"
      class="text-xs leading-6 font-extralight text-gray-600 my-5 text-justify"
    >
      <div class="py-3">
        {{ $t("about.community_section.text1") }}
      </div>
      <div class="py-3">
        {{ $t("about.community_section.text2") }}
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
