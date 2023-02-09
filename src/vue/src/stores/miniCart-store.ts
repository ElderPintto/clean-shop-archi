import { product } from '../components/models';
import { defineStore } from 'pinia';
import ProductService from 'app/../core/src/domain/product/useCase';
import ProductRepository from 'app/../core/src/domain/product/repository';
import { BaseApiClient } from 'app/../core/src/infra';

const baseApiClient = new BaseApiClient({
  baseURL: 'https://fakestoreapi.com/',
});
const productRepository = new ProductRepository(baseApiClient);
const productService = new ProductService(productRepository);

export const useMiniCartStore = defineStore('miniCart', {
  state: () => ({
    itemsCart: [] as product[],
  }),
  getters: {
    count: (state) => state.itemsCart.length,
    valueTotal: (state) =>
      state.itemsCart.reduce(
        (acc, item) => acc + item.price * (item.quantityInCart || 1),
        0
      ),
  },
  actions: {
    addItem(item: product): void {
      const newItems = productService.addProduct(item, this.itemsCart);
      this.itemsCart = newItems;
    },
    removeItem(item: product): void {
      this.itemsCart = this.itemsCart.filter(
        (elm: product) => elm.id != item.id
      );
    },
  },
});
