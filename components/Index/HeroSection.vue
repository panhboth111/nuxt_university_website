<template>
  <!-- background image for hero section which takes up the whole screen -->
  <div
    :style="{
      backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${'/home/hero2.jpeg'})`,
    }"
    class="h-screen bg-no-repeat bg-cover overlay-bg flex items-center justify-center"
  >
    <!-- the text for the hero section-->
    <div class="text-white text-center w-hero_text">
      <!-- main text -->
      <div
        class="font-bold lg:text-5xl text-3xl"
        id="hero-title"
        data-aos="zoom-in"
        data-aos-duration="1400"
      >
        {{ $t("home.hero_section.title1") }}<br />
        {{ $t("home.hero_section.title2") }} <br />
        {{ $t("home.hero_section.title3") }} <br />
      </div>
      <!-- subtitle text -->
      <div class="font-thin">{{ $t("home.hero_section.subtitle") }}</div>
      <div class="mt-4" data-aos="fade-up" data-aos-duration="1200">
        <nuxt-link to="/contact">
          <button
            class="bg-primary hover:bg-opacity-0 border border-primary px-10 py-2 text-white hover:text-primary mr-2 transition ease-in-out duration-700"
          >
            {{ $t("home.hero_section.inquire_btn") }}
          </button>
        </nuxt-link>
        <nuxt-link to="/about">
          <button
            class="border border-white hover:bg-white hover:text-black px-10 py-2 transition ease-in-out duration-700"
          >
            {{ $t("home.hero_section.about_btn") }}
          </button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const heroTitle = document.getElementById("hero-title");
    if (heroTitle && this.$i18n.locale == "km") {
      heroTitle.style.lineHeight = "1.7";
    }
  },
};
</script>

<style></style>
