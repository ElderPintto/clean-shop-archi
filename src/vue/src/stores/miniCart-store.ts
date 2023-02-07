import { product } from '../components/models';
import { defineStore } from 'pinia';

export const useMiniCartStore = defineStore('miniCart', {
  state: () => ({
    itemsCart: [] as product[],
  }),
  getters: {
    count: (state) => state.itemsCart.length,
  },
  actions: {
    addItem(item: product) {
      this.itemsCart.push(item);
    },
    removeItem(item: product) {
      this.itemsCart = this.itemsCart.filter(
        (elm: product) => elm.id != item.id
      );
    },
  },
});
