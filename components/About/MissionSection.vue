<template>
  <div class="md:px-20 px-4 py-16">
    <Title
      :title="$t('about.mission_section.title')"
      color_title="text-primary"
    />
    <div class="mt-10 h-about_mission grid grid-cols-1 lg:grid-cols-4 gap-4">
      <div
        class="h-full row-span-2 object-cover bg-center bg-cover relative"
        :style="{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/about/career.jpeg')`,
        }"
      >
        <div
          class="absolute bottom-0 lg:top-1/2 w-full text-center text-white px-4"
        >
          {{ $t("about.mission_section.text1") }}
        </div>
      </div>
      <div
        class="h-full row-span-2 object-cover bg-center bg-cover relative"
        :style="{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/about/innovation.jpeg')`,
        }"
      >
        <div
          class="absolute bottom-0 lg:top-1/2 w-full text-center text-white px-4"
        >
          {{ $t("about.mission_section.text2") }}
        </div>
      </div>
      <div
        class="h-full row-span-2 object-cover bg-center bg-cover relative"
        :style="{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/about/community.jpeg')`,
        }"
      >
        <div
          class="absolute bottom-0 lg:top-1/2 w-full text-center text-white px-4"
        >
          {{ $t("about.mission_section.text3") }}
        </div>
      </div>
      <div
        class="h-full row-span-2 object-cover bg-center bg-cover relative"
        :style="{
          backgroundImage: ` linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url('/about/leader.jpg')`,
        }"
      >
        <div
          class="absolute bottom-0 lg:top-1/2 w-full text-center text-white px-4"
        >
          {{ $t("about.mission_section.text4") }}
        </div>
      </div>
    </div>
    <div
      class="w-full bg-yellow-300 h-72 mt-4 object-cover bg-center bg-cover relative"
      :style="{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/about/digital.jpg')`,
      }"
    >
      <div class="absolute top-1/2 w-full text-center text-white px-4">
        {{ $t("about.mission_section.text5") }}
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

<style></style>
