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
      <div class="text-sm hidden lg:block">EN</div>
      <MenuIcon :toggleDrawer="toggleDrawer" />
      <div v-show="drawer" class="lg:hidden block">
        <div
          class="w-full flex flex-col items-start px-4 py-3 fixed z-50 top-0 left-0 bg-white filter drop-shadow-lg transform duration-1000 ease-out"
        >
          <div class="flex justify-between w-full">
            <div>
              <NuxtLink to="/" class="flex items-center">
                <img
                  class="md:h-8 h-6"
                  src="~static/logo.png"
                  alt="ATTCAPITAL_LOGO_LIGHT.png"
                />
              </NuxtLink>
            </div>

            <!-- close drawer -->
            <div @click="toggleDrawer">
              <svg
                style="width: 24px; height: 24px"
                class="text-primary"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z"
                />
              </svg>
            </div>
          </div>

          <div class="w-full border-b border-primary py-1"></div>

          <ul
            class="flex flex-col justify-center items-center w-full md:space-y-0 space-y-2 p-4 py-3 md:flex-row md:space-x-12 md:mt-0"
          >
            <NuxtLink
              v-for="(item, n) in items"
              :key="n"
              :to="item.to"
              class="block pt-4 text-xs hover:text-primary text-center text-black"
              active-class="text-primary border-b border-primary font-bold "
              exact=""
            >
              <li @click="drawer = false">{{ item.title }}</li>
            </NuxtLink>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import MenuIcon from "~/components/Icons/MenuIcon.vue";
export default {
  components: {
    MenuIcon,
  },
  data: () => ({
    items: [
      { title: "Home", to: "/" },
      { title: "About", to: "/about" },
      { title: "Admission", to: "/admission" },
      { title: "Contact", to: "/contact" },
    ],
    scrollPosition: 0,
    drawer: false,
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
    toggleDrawer() {
      console.log("clicked");
      this.drawer = !this.drawer;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style></style>
