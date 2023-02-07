<template>
  <PageLayout>
    <template #pageTitle>
      <h3></h3>
    </template>

    <div v-if="isLoading">loading...</div>
    <ShowCase :list="products" v-else>
      {{ products }}
    </ShowCase>
  </PageLayout>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { storeToRefs } from 'pinia';
import PageLayout from '../../../layouts/PageLayout.vue';
import ShowCase from '../../../components/showCase/ShowCaseList.vue';

/* useProductStore */
import { useProductStore } from '../store';
const productStore = useProductStore();
const { products, isLoading } = storeToRefs(productStore);
const { getAllProduct } = productStore;
/* useProductStore */

const loadData = async () => {
  await getAllProduct();
};

onBeforeMount(async () => {
  loadData();
});
</script>
