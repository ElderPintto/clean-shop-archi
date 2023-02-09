<template>
  <div class="q-pa-sm" v-if="count">
    <q-list>
      <q-item
        class="q-px-none q-py-xs"
        v-for="item in itemsCart"
        :key="item.id"
      >
        <q-item-section avatar>
          <q-img
            :src="item.image"
            :ratio="8 / 8"
            fit="contain"
            spinner-color="primary"
            spinner-size="60px"
          />
        </q-item-section>
        <q-item-section>
          <p class="row flex-wrap">
            <span class="ellipsis-2-lines flex flex-grow">
              {{ item.title }}
            </span>
          </p>
          <p class="q-ma-none row align-center justify-between">
            <span class="text-body2 flex content-center">
              R$ {{ item.price }}
            </span>
            <span class="text-body2 flex content-center">
              qnt : {{ item.quantityInCart }}
            </span>
            <q-btn
              dense
              flat
              color="primary"
              icon="close"
              @click.stop="removeItem(item)"
              class="q-pa-none"
            />
          </p>
        </q-item-section>
      </q-item>
      <q-separator />
      <q-item-label header class="flex justify-between">
        <div>
          <strong class="text-primary">Valor Total</strong>
        </div>
        <div>{{ formatter.format(valueTotal) }}</div>
      </q-item-label>
      <q-separator />
      <q-item-label header>
        <q-btn
          color="primary"
          class="full-width"
          flat
          label="vá para o carrinho"
        />
      </q-item-label>
    </q-list>
  </div>
  <div class="row align-center content-center justify-center fit" v-else>
    <q-icon dense flat round size="lg" color="primary" name="shopping_bag" />
    <h5 class="q-ma-sm text-primary">Não há items no Carrinho</h5>
  </div>
</template>

<script setup lang="ts">
import { useMiniCartStore } from 'stores/miniCart-store';
import { storeToRefs } from 'pinia';

const storeMiniCart = useMiniCartStore();
const { valueTotal, count, itemsCart } = storeToRefs(storeMiniCart);
const { removeItem } = storeMiniCart;

const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
</script>
