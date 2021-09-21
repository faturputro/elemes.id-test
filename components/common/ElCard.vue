<template>
  <div
    class="el-card"
    :class="[cardColor, elevated && 'el-card--elevation' ]"
  >
    <div v-if="elevated" class="el-card--overlay"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'md',
    },
    color: {
      type: String,
      default: 'green',
    },
    hoverable: {
      type: Boolean,
      default: false,
    },
    elevated: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    cardColor() {
      switch (this.color) {
        case 'red':
          return 'el-card--red';
        case 'green':
          return 'el-card--green';
        case 'indigo':
          return 'el-card--indigo';
        case 'blue':
          return 'el-card--blue';
        case 'army':
          return 'el-card--army';
        default:
          return '';
      }
    },
  },
};
</script>
