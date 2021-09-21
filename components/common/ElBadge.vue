<template>
  <span class="el-badge" :class="[getColor, position]" :data-badge-content="content">
    <slot></slot>
  </span>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: '',
      required: true,
    },
    position: {
      type: String,
      default: 'top-center',
    },
    color: {
      type: String,
      default: 'error',
    },
  },
  computed: {
    getColor() {
      switch (this.color) {
        case 'green':
          return 'el-badge--green';
        case 'blue':
          return 'el-badge--green';
        case 'red':
          return 'el-badge--green';
        case 'indigo':
          return 'el-badge--green';
        default:
          return 'el-badge--error';
      }
    },
  },
};
</script>
