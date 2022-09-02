<template>
  <div>
    <HeroSection />
    <LifeSection />
    <VisionSection />
    <BecomeSection />
  </div>
</template>

<script>
import HeroSection from "~/components/Index/HeroSection.vue";
import LifeSection from "~/components/Index/LifeSection.vue";
import VisionSection from "~/components/Index/VisionSection.vue";
import BecomeSection from "~/components/Index/BecomeSection.vue";
export default {
  components: {
    HeroSection,
    LifeSection,
    VisionSection,
    BecomeSection,
  },
};
</script>
