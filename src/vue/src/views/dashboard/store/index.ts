import { defineStore } from 'pinia';

import ProductService from '../../../../../core/src/domain/product/useCase';

const productService = new ProductService({
  baseURL: 'https://fakestoreapi.com/',
});

export const useProductStore = defineStore('product', {
  state: () => ({
    isLoading: false,
    products: [{}],
  }),
  actions: {
    async getAllProduct(): Promise<void> {
      this.isLoading = true;
      const result = await productService.getAllProducts();
      this.products = result;
      this.isLoading = false;
    },
  },
});
