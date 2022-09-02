<template>
  <div class="border-t border-primary px-4 md:py-10 py-4 lg:px-20">
    <div class="md:flex hidden md:justify-between justify-center items-center">
      <div class="">
        <ul class="flex flex-col mt-4 md:flex-row md:space-x-12 md:mt-0">
          <NuxtLink
            v-for="(item, n) in navItems"
            :key="n"
            :to="item.to"
            class="block py-2 pr-4 pl-3 text-xs md:border-0 hover:text-primary md:p-0"
            exact=""
            active-class="text-primary font-bold"
          >
            <li>{{ item.title }}</li>
          </NuxtLink>
        </ul>
      </div>
      <Contact />
    </div>
    <div class="flex flex-col items-center md:my-16 my-8">
      <img class="h-9" src="/logo.png" alt="" />
      <div class="text-xs font-thin text-center mt-2">
        THIS WEBSITE IS NOT AN OFFICIAL WEBSITE. <br />
        IT IS MADE BY A STUDENT OF KIT FOR LEARNING PURPOSES.
      </div>
      <Contact class="md:hidden mt-3" />
      <div class="flex md:hidden mt-3 text-xs">
        <div
          class="border-b border-transparent hover:border-primary hover:text-primary cursor-pointer"
        >
          Term of Service
        </div>
        <div class="px-2">|</div>
        <div
          class="border-b border-transparent hover:border-primary hover:text-primary cursor-pointer"
        >
          Privacy Policy
        </div>
      </div>
      <div class="md:hidden mt-2 text-xs">
        Developed by
        <span
          class="text-primary border-b border-transparent hover:border-primary hover:text-gray-600 font-bold"
          ><a href="#" target="_blank">Neak Panhboth, B6A</a></span
        >
      </div>
    </div>
    <div class="md:flex hidden md:justify-between text-xs">
      <div class="">
        Developed by
        <span
          class="text-primary border-b border-transparent hover:border-primary hover:text-gray-600 font-bold"
          ><a href="#" target="_blank">Neak Panhboth, B6A</a></span
        >
      </div>
      <div class="flex">
        <div
          class="border-b border-transparent hover:border-primary hover:text-primary cursor-pointer"
        >
          Term of Service
        </div>
        <div class="px-2">|</div>
        <div
          class="border-b border-transparent hover:border-primary hover:text-primary cursor-pointer"
        >
          Privacy Policy
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Contact from "~/components/Reusables/Contact.vue";
export default {
  components: {
    Contact,
  },
  data() {
    return {
      navItems: [
        { title: "Home", to: "/" },
        { title: "About", to: "/about" },
        { title: "Admission", to: "/admission" },
        { title: "Contact", to: "/contact" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
