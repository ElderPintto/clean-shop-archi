<template>
  <q-list class="row q-pa-none">
    <ShowCaseItem
      v-for="item in list"
      :key="item.id"
      :item="item"
      class="col-3"
    >
    </ShowCaseItem>
  </q-list>
</template>

<script setup lang="ts">
import { product } from '../models';
import ShowCaseItem from './ShowCaseItem.vue';

interface Props {
  list?: product[];
}

withDefaults(defineProps<Props>(), {
  list: () => [],
});
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}
</style>
