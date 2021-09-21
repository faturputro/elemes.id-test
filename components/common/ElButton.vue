<template>
  <button
    type="button"
    class="el-button"
    :class="[ buttonType, isDisabled ]"
    @click="emitEvent"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'default',
    },
    size: {
      type: String,
      default: 'md',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonType() {
      switch (this.color) {
        case 'primary':
          return 'el-button__primary';
        case 'secondary':
          return 'el-button__secondary';
        default:
          return 'el-button__default';
      }
    },
    isDisabled() {
      return this.disabled && 'is-disabled';
    },
  },
  methods: {
    emitEvent() {
      if (!this.disabled) {
        this.$emit('click');
      }
    },
  },
};
</script>
