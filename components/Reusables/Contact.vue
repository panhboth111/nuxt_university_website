<template>
  <div class="flex text-primary">
    <div class="hover:text-gray-800 pr-3 cursor-pointer">
      <!-- facebook -->
      <a href="https://web.facebook.com/KITinstitute" target="_blank">
        <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"
          /></svg
      ></a>
    </div>
    <div class="hover:text-gray-800 pr-1 cursor-pointer">
      <!-- telegram -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8 fill-current"
        viewBox="0 0 70 70"
      >
        <path
          d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"
        ></path>
      </svg>
    </div>
    <div class="hover:text-gray-800 pr-3 cursor-pointer">
      <!-- mail -->

      <nuxt-link to="/contact">
        <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"
          />
        </svg>
      </nuxt-link>
    </div>

    <div class="hover:text-gray-800 cursor-pointer">
      <!-- location -->
      <a
        href="https://maps.app.goo.gl/wvGbdK1qugWZPwYw5?g_st=ic"
        target="_blank"
      >
        <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"
          /></svg
      ></a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
