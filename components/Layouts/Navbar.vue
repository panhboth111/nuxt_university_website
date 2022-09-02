<template>
  <!-- navigation bar -->
  <nav
    :class="`flex items-end justify-between lg:px-24 px-4 py-6 fixed w-full z-50 ${
      scrollPosition > 0
        ? 'bg-white border-b border-b-black text-black'
        : 'text-white '
    }`"
  >
    <!-- left side of the navbar (logo and items)  -->
    <div class="flex items-end">
      <!-- logo -->
      <div class="mr-20">
        <img src="/logo.png" class="w-10" alt="" />
      </div>
      <!-- items (hidden on mobile screens) -->
      <ul class="hidden lg:flex items-center text-sm">
        <nuxt-link
          class="mx-6"
          v-for="(item, index) in items"
          :key="index"
          :to="item.to"
          ><li
            class="hover:text-primary font-thin hover:font-bold transition ease-in-out duration-700"
          >
            {{ item.title }}
          </li></nuxt-link
        >
      </ul>
    </div>
    <!-- right side of the navbar  -->
    <div class="flex font-thin">
      <div class="text-sm">EN</div>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: "Home", to: "/" },
      { title: "About", to: "/about" },
      { title: "Admission", to: "/admission" },
      { title: "Contact", to: "/contact" },
    ],
    scrollPosition: 0,
  }),
  methods: {
    handleScroll() {
      try {
        console.log("scrolling");
        this.scrollPosition = window.scrollY;
      } catch (error) {
        console.log(error.message);
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style></style>
