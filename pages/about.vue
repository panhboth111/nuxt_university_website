<template>
  <div>
    <HeroSection
      title="Kirirom Institute of Technology"
      subtitle="Everything about "
      image="/about/hero.jpeg"
    />
    <HistorySection />
    <LocationSection />
    <PlanSection />
    <MissionSection />
    <CommunitySection />
    <CardSection
      description="A leading science and technology university in Southeast Asia with excellent education, cutting-edge research, and a commitment to green development and a multicultural community."
      title="Our Vision"
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
