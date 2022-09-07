<template>
  <div
    class="h-screen flex lg:flex-row flex-col lg:space-x-6 space-y-20 justify-center items-center px-4 lg:px-20"
  >
    <div class="lg:w-1/3">
      <Title
        :title="$t('home.life_section.student_life')"
        color_title="text-primary"
      />

      <div
        data-aos="zoom-in-up"
        data-aos-duration="1400"
        class="md:text-sm md:leading-6 text-xs leading-5 font-extralight text-gray-500 my-4"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
        pellentesque orci condimentum, feugiat ipsum ac, faucibus ante. In
        cursus ante a velit scelerisque congue. Donec nulla erat, feugiat eu
        risus auctor, consequat laoreet urna. Fusce non quam et mi sodales
        convallis eu et nulla. Praesent nec libero tempor, malesuada purus eu,
        egestas ligula. Nulla facilisi. Maecenas malesuada mi nulla, ac rutrum
        sapien eleifend ut. Praesent ac erat ipsum.
      </div>
      <div class="flex uppercase" data-aos="fade-in" data-aos-duration="1700">
        <NuxtLink to="/about">
          <div class="border-b-2 border-primary text-primary text-xs font-bold">
            {{ $t("home.life_section.see_more") }}
          </div></NuxtLink
        >
      </div>
    </div>
    <div class="lg:w-2/3">
      <div class="grid grid-cols-3 sm:gap-9 gap-2">
        <div class="" data-aos="fade-up" data-aos-duration="1200">
          <img class="" src="/home/sport.jpeg" alt="" />
        </div>
        <div class="relative" data-aos="fade-up" data-aos-duration="1700">
          <img
            class="absolute md:-top-16 -top-10"
            src="/home/canteen.jpeg"
            alt=""
          />
        </div>
        <div data-aos="fade-up" data-aos-duration="2000">
          <img src="/home/career.jpeg" alt="" />
        </div>
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
