<template>
  <div
    class="md:grid md:grid-cols-2 md:gap-7 flex flex-col-reverse bg-white px-4 lg:px-16 py-16"
  >
    <div class="md:p-16 sm:p-10 p-4">
      <div class="md:text-lg text-sm font-bold text-primary">EMAIL US NOW</div>
      <div class="text-xs py-2">
        By submitting this form, you are sending us an email as well as directly
        alerting us in our telegram group. We hope to see you soon. have a nice
        day.
      </div>

      <div class="py-3">
        <div class="font-bold uppercase text-sm text-primary">Location</div>
        <div class="text-xs pt-1 transform hover:underline cursor-pointer">
          <a
            href="https://www.google.com/maps?q=Attwood+Business+Center+(PhnomPenh,+Cambodia),+No+23+Russian+Federation+Blvd+(110),+Phnom+Penh&ftid=0x310951c6d5abf721:0xd0c7e8f7c7dbe4ca&hl=en-KH&gl=kh&entry=gps&g_ep=CAISBjYuMzEuMxgA&shorturl=1"
            target="_blank"
          >
            #12, Street 2001, Parprak Khang Tboung Village, Sangkat Kakab, Khan
            Porsen Chey, Phnom Penh, Cambodia.
          </a>
        </div>
      </div>

      <div class="py-3">
        <div class="font-bold uppercase text-sm text-primary">Email</div>
        <div class="text-xs flex space-x-2 pt-1">
          <div>neakpanhboth18@kit.edu.kh</div>
        </div>
      </div>

      <div class="">
        <Contact />
      </div>
    </div>
    <div class="md:p-16 sm:p-10 p-4">
      <div class="md:text-lg text-sm font-bold text-primary">Get in Touch</div>
      <div class="text-xs py-2">
        If you have query, kindly contact us directly or fill out this form, we
        will get back to you soon.
      </div>

      <ValidationObserver ref="form" v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(onSubmit)">
          <ValidationProvider rules="required|text" v-slot="{ errors }">
            <div class="py-2">
              <label class="block mb-2 text-xs"
                >Full name <span class="text-red-600 text-sm">*</span></label
              >
              <input
                type="text"
                id="full_name"
                v-model="email.name"
                class="bg-gray-100 bg-clip-padding text-primary text-sm rounded-md border-transparent focus:border-transparent focus:ring-0 focus:outline-none focus:bg-white block w-full p-2.5"
              />
              <span class="text-xs text-red-600">{{ errors[0] }}</span>
            </div>
          </ValidationProvider>
          <ValidationProvider rules="required|email" v-slot="{ errors }">
            <div class="py-2">
              <label class="block mb-2 text-xs"
                >Email <span class="text-red-600 text-sm">*</span></label
              >
              <input
                v-model="email.email"
                type="text"
                name="email"
                class="bg-gray-100 bg-clip-padding text-primary text-sm rounded-md border-transparent focus:border-transparent focus:ring-0 focus:outline-none focus:bg-white block w-full p-2.5"
              />
              <span class="text-xs text-red-600">{{ errors[0] }}</span>
            </div>
          </ValidationProvider>
          <ValidationProvider rules="required|phone" v-slot="{ errors }">
            <div class="py-2">
              <label class="block mb-2 text-xs"
                >Phone Number <span class="text-red-600 text-sm">*</span></label
              >
              <input
                v-model="email.phone"
                type="number"
                onkeydown="return event.keyCode === 69 ? false : event.keyCode === 189 ? false : event.keyCode === 190 ? false : true"
                class="bg-gray-100 bg-clip-padding text-primary text-sm rounded-md border-transparent focus:border-transparent focus:ring-0 focus:outline-none focus:bg-white block w-full p-2.5"
              />
              <span class="text-xs text-red-600">{{ errors[0] }}</span>
            </div>
          </ValidationProvider>
          <ValidationProvider rules="required" v-slot="{ errors }">
            <div class="py-2">
              <label class="block mb-2 text-xs"
                >Subject <span class="text-red-600 text-sm">*</span></label
              >
              <input
                type="text"
                v-model="email.subject"
                class="bg-gray-100 bg-clip-padding text-primary text-sm rounded-md border-transparent focus:border-transparent focus:ring-0 focus:outline-none focus:bg-white block w-full p-2.5"
              />
              <span class="text-xs text-red-600">{{ errors[0] }}</span>
            </div>
          </ValidationProvider>
          <ValidationProvider rules="required|text" v-slot="{ errors }">
            <div class="py-2">
              <label class="block mb-2 text-xs"
                >Your Message <span class="text-red-600 text-sm">*</span></label
              >
              <textarea
                rows="4"
                v-model="email.message"
                class="block p-2.5 w-full max-h-52 text-sm text-primary bg-gray-100 rounded-md focus:border-transparent focus:ring-0 focus:outline-none focus:bg-white resize-none"
              ></textarea>
              <span class="text-xs text-red-600">{{ errors[0] }}</span>
            </div>
          </ValidationProvider>
          <div
            v-if="msg.show"
            :class="`${msg.error ? 'text-red-600' : 'text-white'} text-sm`"
          >
            {{ msg.content }}
          </div>
          <div class="py-3">
            <button
              type="submit"
              class="text-white bg-primary hover:text-primary border hover:border-primary hover:bg-opacity-0 font-medium rounded-md text-xs px-10 py-2.5 text-center mr-2 mb-2"
            >
              Submit
            </button>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import Contact from "~/components/Reusables/Contact.vue";

import { ValidationProvider, ValidationObserver } from "vee-validate";
import { extend } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";

import { isValidPhoneNumber } from "libphonenumber-js";

extend("email", { ...email, message: "Invalid Email" });

extend("required", {
  ...required,
  message: "This field is required",
});

extend("text", (value) => {
  const regex =
    /^(?![0-9!@#*%^$&'\{\}\[\]() \\`\-\_\:\|.+,/\"]+$)[a-zA-Z0-9!@#*%^$&'\{\}\[\]() \\`\-\_\:\|.+,/\"]+$/g;
  if (!regex.test(value)) {
    return "Invalid Input";
  }
  return true;
});

extend("phone", (value) => {
  if (!isValidPhoneNumber(value, "KH")) {
    return "Invalid Phone Number";
  }
  return true;
});

export default {
  components: {
    Contact,
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      email: {
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      },
      msg: {
        content: "",
        error: false,
        show: true,
      },
    };
  },
  methods: {
    async onSubmit() {
      this.$refs.form.validate();
      this.msg.show = true;
      try {
        const response = await this.$axios.$post("/emails", {
          ...this.email,
        });
        this.msg.error = false;
        this.msg.content =
          "Email sent successfully. Our team will contact you as soon as possible.";
      } catch (error) {
        console.log(error.message);
        this.msg.error = true;
        this.msg.content = error.message;
      }
      this.email = {
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      };

      this.$nextTick(() => {
        this.$refs.form.reset();
      });
    },
  },
};
</script>

<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.bg-color {
  /* background-color: hsla(184, 97%, 26%, 1);
  background-image: radial-gradient(
      at 100% 0%,
      hsla(93, 55%, 50%, 0.9) 0px,
      transparent 50%
    ),
    radial-gradient(at 2% 15%, hsla(136, 58%, 38%, 1) 0px, transparent 50%),
    radial-gradient(at 39% 34%, hsla(136, 58%, 38%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 0%, hsla(184, 97%, 26%, 1) 0px, transparent 50%); */

  /* background-color: hsla(184, 95%, 28%, 1);
  background-image: radial-gradient(
      at 82% 18%,
      hsla(80, 36%, 58%, 0.64) 0px,
      transparent 50%
    ),
    radial-gradient(at 12% 85%, hsla(120, 41%, 73%, 0.7) 0px, transparent 50%); */

  /* better */
  /* background-color: hsla(184, 95%, 28%, 1);
  background-image: radial-gradient(
      at 84% 16%,
      hsla(186, 0%, 79%, 0.63) 0px,
      transparent 50%
    ),
    radial-gradient(at 18% 13%, hsla(80, 36%, 58%, 0.64) 0px, transparent 50%),
    radial-gradient(at 12% 85%, hsla(120, 41%, 73%, 0.7) 0px, transparent 50%); */

  background-color: hsla(184, 95%, 28%, 1);
  background-image: radial-gradient(
      at 84% 16%,
      hsla(186, 0%, 79%, 0.63) 0px,
      transparent 50%
    ),
    radial-gradient(at 18% 17%, hsla(80, 0%, 79%, 0.63) 0px, transparent 50%),
    radial-gradient(at 12% 85%, hsla(120, 0%, 79%, 0.63) 0px, transparent 50%);
}
</style>
