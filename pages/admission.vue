<template>
  <div class="pb-10">
    <HeroSection
      :title="$t('admission.hero_section.title')"
      :subtitle="$t('admission.hero_section.subtitle')"
      image="/admission/hero.jpeg"
    />
    <TextDescription
      :title="$t('admission.inclusive_section.title')"
      :description="$t('admission.inclusive_section.description')"
    />
    <TextDescription
      :title="$t('admission.acedamic_section.title')"
      :description="$t('admission.acedamic_section.description')"
    />
    <TextDescription
      :title="$t('admission.mental_section.title')"
      :description="$t('admission.mental_section.description')"
    />
    <div class="mt-10 md:px-20 px-4">
      <nuxt-link to="/contact"
        ><button class="bg-primary px-10 py-2 text-white">
          {{ $t("admission.enroll_btn") }}
        </button></nuxt-link
      >
    </div>
  </div>
</template>

<script>
import HeroSection from "~/components/Reusables/HeroSection.vue";
import TextDescription from "~/components/Reusables/TextDescription.vue";
export default {
  components: {
    HeroSection,
    TextDescription,
  },
};
</script>

<style></style>
