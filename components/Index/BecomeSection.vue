<template>
  <div class="text-center py-40 typed text-2xl lg:text-5xl font-bold"></div>
</template>

<script>
import Typed from "typed.js";
export default {
  methods: {
    typeEffect() {
      const typed = new Typed(".typed", {
        strings: ["SIGN UP TODAY AND BECOME ONE OF US!"],
        typeSpeed: 20,
        backSpeed: 20,
        backDelay: 3000,
        loop: true,
      });
    },
  },
  mounted() {
    this.typeEffect();
  },
};
</script>

<style></style>
