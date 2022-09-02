<template>
  <div>
    <HeroSection
      title="Kirirom Institute of Technology"
      subtitle="Contact "
      image="/about/hero.jpeg"
    />
    <FormSection />
    <!-- <div class="grid grid-cols-1 lg:grid-cols-2">
      <FormSection />
      <InfoSection />
    </div> -->
  </div>
</template>

<script>
import HeroSection from "~/components/Reusables/HeroSection.vue";
import FormSection from "~/components/Contact/FormSection.vue";
import InfoSection from "~/components/Contact/InfoSection.vue";
export default {
  components: {
    HeroSection,
    InfoSection,
    FormSection,
  },
};
</script>

<style></style>
