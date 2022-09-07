<template>
  <div>
    <HeroSection
      :title="$t('about.hero_section.title')"
      :subtitle="$t('about.hero_section.subtitle')"
      image="/about/hero.jpeg"
    />
    <HistorySection />
    <LocationSection />
    <PlanSection />
    <MissionSection />
    <CommunitySection />
    <CardSection
      :description="$t('about.vision_section.description')"
      :title="$t('about.vision_section.title')"
      image="/about/vision.jpeg"
    />
  </div>
</template>

<script>
import HeroSection from "~/components/Reusables/HeroSection.vue";

import HistorySection from "~/components/About/HistorySection.vue";
import PlanSection from "~/components/About/PlanSection.vue";
import MissionSection from "~/components/About/MissionSection.vue";
import CardSection from "~/components/About/CardSection.vue";
import CommunitySection from "~/components/About/CommunitySection.vue";
import LocationSection from "~/components/About/LocationSection.vue";
export default {
  components: {
    HeroSection,
    HistorySection,
    PlanSection,
    MissionSection,
    CommunitySection,
    CardSection,
    LocationSection,
  },
};
</script>

<style></style>
