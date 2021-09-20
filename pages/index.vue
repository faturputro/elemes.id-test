<template>
  <div>
    <section id="s-jumbotron" class="flex items-center h-screen">
      <div class="container mx-auto flex items-center justify-between z-20">
        <div class="w-1/3 mr-12">
          <h1 class="font-medium text-primary mb-10 text-5xl lg:text-6xl xl:text-6xl">
            Good Food Us <br>
            Good Mood
          </h1>
          <p class="text-gray-500 text-lg">
            I would think that conserving our natural resources
            should be a conservative position: Not to waste food,
            and not to throw away a lot of the food that we buy.
          </p>
          <div class="flex items-center mt-4">
            <el-button color="primary">Daftar Sekarang</el-button>
            <el-button color="secondary">About Us</el-button>
          </div>
        </div>
        <div class="w-1/2">
          <div class="jumbotron-container">
            <img
              src="@/assets/images/Food-Plate.png"
              class="rotating"
              alt="I would think that conserving our natural resources
              should be a conservative position: Not to waste food,
              and not to throw away a lot of the food that we buy."
            />
            <div class="jumbotron-review__card vibrate-3">
              <div class="flex items-center">
                <div class="w-12 mr-4">
                  <img src="@/assets/images/Food-Plate.png" alt="Good Food = Good Mood">
                </div>
                <div>
                  <h6 class="text-dark font-medium">Green Salad Tomato</h6>
                  <small class="text-gray-400 tracking-wide">Tomato</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="s-jumbotron-overlay"></div>
    </section>
    <section class="h-screen py-10">
      <div class="container mx-auto">
        <div class="py-8">
          <h2 class="text-5xl font-medium text-dark mb-4">Browse Our Category</h2>
          <h2 class="text-5xl font-medium text-primary">Receipt</h2>
        </div>
        <el-card
          v-for="(cat, i) in categories"
          :key="`category-${i}`"
          :color="cat.color"
        >
          {{ cat.title }}
        </el-card>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          src: '',
          title: 'Pizza',
          total: 20,
          color: 'green',
        },
        {
          src: '',
          title: 'Pizza',
          total: 20,
          color: 'blue',
        },
        {
          src: '',
          title: 'Pizza',
          total: 20,
          color: 'red',
        },
        {
          src: '',
          title: 'Pizza',
          total: 20,
          color: 'army',
        },
        {
          src: '',
          title: 'Pizza',
          total: 20,
          color: 'indigo',
        },
        {
          src: '',
          title: 'Pizza',
          total: 20,
        },
        {
          src: '',
          title: 'Pizza',
          total: 20,
        },
      ],
    };
  },
}
</script>
