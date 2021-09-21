import Vue from 'vue';

import ElButton from '@/components/common/ElButton.vue';
import ElCard from '@/components/common/ElCard.vue';
import ElBadge from '@/components/common/ElBadge.vue';

const components = {
  ElButton,
  ElCard,
  ElBadge,
};

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component);
});
