<template>
  <div class="el-input el-input--container">
    <input v-model="inputVal" type="text" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
  },
  computed: {
    inputVal: {
      get() {
        return this.value;
      },
      set(val) {
        return this.$emit('input', val);
      },
    },
  },
};
</script>
