<template>
  <footer class="p-10">
    <div class="container mx-auto bg-primary-lightest rounded-2xl">
      <div class="p-12 flex">
        <div class="w-1/4">
          <div class="w-3/5 mb-6">
            <img src="@/assets/images/Elemes-Logo.jpg" alt="Elemes.id">
          </div>
          <p class="text-sm text-gray-500">
            Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan,
            Kecamatan Setiabudi, Kota Jakarta Selatan,
            Daerah Khusus Ibukota Jakarta 12950
          </p>
        </div>
        <div class="w-1/4 px-8">
          <h6 class="text-xl text-gray-600 mb-10 font-medium">Categories</h6>
          <ul>
            <li class="mb-4 text-gray-500">
              <nuxt-link to="/">
                Cupcake
              </nuxt-link>
            </li>
            <li class="mb-4 text-gray-500">
              <nuxt-link to="/">
                Pizza
              </nuxt-link>
            </li>
            <li class="mb-4 text-gray-500">
              <nuxt-link to="/">
                Kebab
              </nuxt-link>
            </li>
            <li class="mb-4 text-gray-500">
              <nuxt-link to="/">
                Salmon
              </nuxt-link>
            </li>
            <li class="mb-4 text-gray-500">
              <nuxt-link to="/">
                Doughnut
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="w-1/4 px-8">
          <h6 class="text-xl text-gray-600 mb-10 font-medium">About Us</h6>
          <ul>
            <li class="mb-4 text-gray-500">
              <nuxt-link to="/">
                About Us
              </nuxt-link>
            </li>
            <li class="mb-4 text-gray-500">
              <nuxt-link to="/">
                FAQ
              </nuxt-link>
            </li>
            <li class="mb-4 text-gray-500">
              <nuxt-link to="/">
                Report a Problem
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="w-1/4 px-8">
          <h6 class="text-xl text-gray-600 mb-10 font-medium">Newsletter</h6>
          <p class="mb-4 text-gray-500">
            Get now free 50% discount for all products on your first order.
          </p>
          <div class="mt-1 w-20 flex rounded-md">
            <input
              v-model="email"
              type="text"
              class="h-8 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block rounded-none rounded-l-md sm:text-sm border-gray-300 p-3 border-2 border-gray-400"
              placeholder="Your email address"
            />
            <button
              class="inline-flex items-center px-3 rounded-r-md border border-r-0 border-gray-300 bg-primary text-white text-sm"
              @click="submit"
            >
              SEND
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      email: '',
    };
  },
  methods: {
    async submit() {
      try {
        const payload = {
          email: this.email,
        };
        const res = await this.$axios({
          url: 'https://jsonplaceholder.typicode.com/posts',
          method: 'POST',
          data: payload,
        });
        alert(res.data);
      } catch (e) {
        alert(e.message);
      }
    },
  },
};
</script>
