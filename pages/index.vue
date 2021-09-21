<template>
  <div>
    <section id="s-jumbotron" class="flex items-center h-screen">
      <div class="container mx-auto flex items-center justify-between flex-col-reverse lg:flex-row xl:flex-row z-20">
        <div class="w-11/12 lg:w-1/3 xl:w-1/3 lg:mr-12 xl:mr-12">
          <h1 class="font-medium text-primary mb-10 text-5xl lg:text-6xl xl:text-6xl">
            Good Food Us <br>
            Good Mood
          </h1>
          <p class="text-gray-500 text-base lg:text-lg xl:text-lg">
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
                  <h6 class="text-dark font-medium text-sm lg:text-base xl:text-base">Green Salad Tomato</h6>
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
      <div class="container mx-auto overflow-scroll sm:overflow-scroll md:overflow-scroll lg:overflow-visible xl:overflow-visible">
        <div class="py-8 px-6 md:px-4 lg:px-0 xl:px-0">
          <h2 class="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-medium text-dark mb-4">Browse Our Category</h2>
          <h2 class="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-medium text-primary">Receipt</h2>
        </div>
        <div ref="carouselContainer" class="mt-12 flex transition-all duration-300 ease-in-out">
          <el-card
            v-for="(cat, i) in categories"
            :key="`category-${i}`"
            :color="cardColor(cat.title)"
            :elevated="true"
          >
            <div class="w-64 h-48 relative p-6">
              <div class="">
                <div class="w-16 mx-auto mb-4">
                  <img :src="cat.src" :alt="cat.title">
                </div>
                <h6 class="text-dark text-lg text-center font-medium block">{{ cat.title }}</h6>
                <p class="text-center">{{ cat.total }} Items</p>
              </div>
            </div>
          </el-card>
        </div>
        <div class="hidden lg:flex xl:flex justify-end mt-4">
          <el-button
            color="primary"
            :disabled="disablePrev"
            @click="controlCarousel(true)"
          >
            <span class="uppercase tracking-wider">Prev</span>
          </el-button>
          <el-button
            color="primary"
            :disabled="isNextDisabled"
            @click="controlCarousel(false)"
          >
            <span class="uppercase tracking-wider">Next</span>
          </el-button>
        </div>
      </div>
    </section>
    <section class="h-screen py-10">
      <div class="container mx-auto">
        <div class="py-8 px-6 md:px-4 lg:px-0 xl:px-0">
          <h2 class="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-medium text-dark mb-4">Browse Our Trending</h2>
          <h2 class="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-medium text-primary">Receipt</h2>
        </div>
        <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          <div
            v-for="(item, i) in trends"
            :key="`trend-${i}`"
            class="p-4 lg:p-2 xl:p-2"
          >
            <el-card
              :color="cardColor(item.category)"
              :elevated="true"
            >
              <div class="relative px-2 py-4">
                <div class="w-1/2 mb-4">
                  <img :src="item.src" :alt="`${item.title} - ${item.category}`">
                </div>
                <h4 class="text-3xl text-dark font-semibold mb-2">{{ item.title }}</h4>
                <h6 class="text-primary font-medium">{{ item.category }}</h6>
              </div>
            </el-card>
          </div>
        </div>
      </div>
      <div class="w-full text-center mt-10">
        <el-button color="primary">All Receipt</el-button>
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
          src: require('@/assets/images/cupcake.svg'),
          title: 'Cupcake',
          total: 22,
        },
        {
          src: require('@/assets/images/pizza.svg'),
          title: 'Pizza',
          total: 25,
        },
        {
          src: require('@/assets/images/kebab.svg'),
          title: 'Kebab',
          total: 12,
        },
        {
          src: require('@/assets/images/salmon.svg'),
          title: 'Salmon',
          total: 22,
        },
        {
          src: require('@/assets/images/doughnut.svg'),
          title: 'Doughnut',
          total: 20,
        },
        {
          src: require('@/assets/images/cupcake.svg'),
          title: 'Cupcake',
          total: 22,
        },
        {
          src: require('@/assets/images/pizza.svg'),
          title: 'Pizza',
          total: 25,
        },
        {
          src: require('@/assets/images/kebab.svg'),
          title: 'Kebab',
          total: 12,
        },
        {
          src: require('@/assets/images/salmon.svg'),
          title: 'Salmon',
          total: 22,
        },
        {
          src: require('@/assets/images/doughnut.svg'),
          title: 'Doughnut',
          total: 20,
        },
        {
          src: require('@/assets/images/cupcake.svg'),
          title: 'Cupcake',
          total: 22,
        },
        {
          src: require('@/assets/images/pizza.svg'),
          title: 'Pizza',
          total: 25,
        },
        {
          src: require('@/assets/images/kebab.svg'),
          title: 'Kebab',
          total: 12,
        },
        {
          src: require('@/assets/images/salmon.svg'),
          title: 'Salmon',
          total: 22,
        },
        {
          src: require('@/assets/images/doughnut.svg'),
          title: 'Doughnut',
          total: 20,
        },
      ],
      carouselOffset: 0,
      isNextDisabled: false,
      trends: [
        {
          title: 'Pizza Pepperoni',
          category: 'Pizza',
          src: require('@/assets/images/pexels-brett-jordan-8425191.png'),
        },
        {
          title: 'Pizza Meat',
          category: 'Pizza',
          src: require('@/assets/images/pexels-daria-shevtsova-12609681.png'),
        },
        {
          title: 'Doner Kebab',
          category: 'Kebab',
          src: require('@/assets/images/pexels-nishant-aneja-29558191.png'),
        },
        {
          title: 'Salmon Roll',
          category: 'Salmon',
          src: require('@/assets/images/pexels-olga-lioncat-72454641.png'),
        },
        {
          title: 'Cupcake Choco',
          category: 'Cupcake',
          src: require('@/assets/images/pexels-oleg-magni-19086741.png'),
        },
        {
          title: 'Doughnut Milk',
          category: 'Doughnut',
          src: require('@/assets/images/pexels-alena-shekhovtcova-69409781.png'),
        },
        {
          title: 'Doughnut Unicorn',
          category: 'Doughnut',
          src: require('@/assets/images/pexels-karley-saagi-20644491.png'),
        },
        {
          title: 'Kathi Kebab',
          category: 'Kebab',
          src: require('@/assets/images/pexels-polina-tankilevitch-6419736 1.png'),
        },
      ],
    };
  },
  head: {
    title: 'Elemes.id Test by Faturachman Dwi Putro',
  },
  computed: {
    disablePrev() {
      return this.carouselOffset === 0;
    },
  },
  methods: {
    controlCarousel(isNext) {
      const el = this.$refs.carouselContainer;
      const {0: item} = el.children;
      const cardWidth = parseFloat(this.computedStyle(item).marginLeft) +
        parseFloat(this.computedStyle(item).marginRight) +
        item.getBoundingClientRect().width;
      if (isNext) {
        this.carouselOffset += cardWidth;
      } else {
        this.carouselOffset -= cardWidth;
      }
      el.style.transform = `translateX(${this.carouselOffset}px)`;

      const els = el.children;
      const lastItem = els[els.length - 1];
      this.isNextDisabled = lastItem.getBoundingClientRect().right <= window.innerWidth;

    },
    computedStyle(el) {
      return window.getComputedStyle(el);
    },
    cardColor(category) {
      switch (category.toLowerCase()) {
        case 'kebab':
          return 'indigo';
        case 'pizza':
          return 'blue';
        case 'salmon':
          return 'red';
        case 'cupcake':
          return 'green';
        case 'doughnut':
          return 'army';
        default:
          return null;
      }
    },
  },
}
</script>
