<template>
  <div>
    <Navbar />
    <div id="appContainer">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>
