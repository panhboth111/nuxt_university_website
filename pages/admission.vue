<template>
  <div class="pb-10">
    <HeroSection
      title="How to become a KITian"
      subtitle="Find out about"
      image="/admission/hero.jpeg"
    />
    <TextDescription
      :title="'Inclusive Admission'"
      description="KIT aims to promote a culturally sensitive and global citizen. Your personal and academic successes are what make you who you are. We put value in the little things that are an integral part of you, your contribution to KIT and the world. By becoming one of us, we will learn, re-learn and unlearn together."
    />
    <TextDescription
      :title="'Academic Merit'"
      description="The main basis to be admitted at KIT is your academic excellence. We look at how well you performed in high school when we evaluate your transcript. Don’t worry. We don’t only rely on numerical data."
    />
    <TextDescription
      :title="'Mental Vigor'"
      description="At KIT, we foster camaraderie and collaboration. It is important for us that our students are nurtured in their creativity and innovation. We would like to see the passion and commitment you have when interacting with our multicultural environment, whether in class, internship, sports, or other activities the community will organize."
    />
    <div class="mt-10 md:px-20 px-4">
      <button class="bg-primary px-10 py-2 text-white">Enroll Now</button>
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
