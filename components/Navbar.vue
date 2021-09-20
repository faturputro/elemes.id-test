<template>
  <nav class="navbar container mx-auto flex justify-between items-center my-4 z-50">
    <div class="w-36 lg:w-48 xl:w-48">
      <nuxt-link to="/">
        <img src="@/assets/images/Elemes-Logo.jpg" alt="Elemes.id" />
      </nuxt-link>
    </div>
    <ul class="justify-around hidden sm:hidden md:hidden lg:flex xl:flex">
      <li class="mx-4">
        <nuxt-link to="/">
          Home
        </nuxt-link>
      </li>
      <li class="mx-4">
        <nuxt-link to="/">
          About
        </nuxt-link>
      </li>
      <li class="mx-4">
        <nuxt-link to="/">
          Promotions
        </nuxt-link>
      </li>
      <li class="mx-4">
        <nuxt-link to="/">
          Blogs
        </nuxt-link>
      </li>
      <li class="mx-4">
        <nuxt-link to="/">
          Contact Us
        </nuxt-link>
      </li>
    </ul>
    <div class="flex items-center">
      <nuxt-link to="/login" class="hidden lg:inline-block xl:inline-block">
        <span class="mx-4">Masuk</span>
      </nuxt-link>
      <el-button color="primary">Daftar Sekarang</el-button>
    </div>
  </nav>
</template>
