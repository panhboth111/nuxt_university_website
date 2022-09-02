<template>
  <div class="md:px-20 px-4 py-16">
    <Title title="Our Mission" color_title="text-primary" />
    <div class="mt-10 h-about_mission grid grid-cols-4 gap-x-4">
      <div
        class="h-full row-span-2 object-cover bg-center bg-cover relative"
        :style="{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/about/career.jpeg')`,
        }"
      >
        <div class="absolute top-1/2 w-full text-center text-white px-4">
          Provide life-changing academic and career opportunities for all
          students, regardless of their family socio-economic backgrounds;
        </div>
      </div>
      <div
        class="h-full row-span-2 object-cover bg-center bg-cover relative"
        :style="{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/about/innovation.jpeg')`,
        }"
      >
        <div class="absolute top-1/2 w-full text-center text-white px-4">
          Foster innovation, creativity and team spirit among students;
        </div>
      </div>
      <div
        class="h-full row-span-2 object-cover bg-center bg-cover relative"
        :style="{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/about/community.jpeg')`,
        }"
      >
        <div class="absolute top-1/2 w-full text-center text-white px-4">
          Establish a diverse and multicultural community conducive to studying,
          living and working;
        </div>
      </div>
      <div
        class="h-full row-span-2 object-cover bg-center bg-cover relative"
        :style="{
          backgroundImage: ` linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url('/about/leader.jpg')`,
        }"
      >
        <div class="absolute top-1/2 w-full text-center text-white px-4">
          Produce young leaders​​​ with a local and global understanding and
          respect;
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
        Serve national and regional needs for a digital workforce with the
        fast-changing context of digital transformation and Industry 4.0.
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
