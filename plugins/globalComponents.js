import Vue from 'vue';

import ElButton from '@/components/common/ElButton.vue';
import ElCard from '@/components/common/ElCard.vue';

const components = {
  ElButton,
  ElCard,
};

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component);
});
