import { defineStore } from 'pinia';

import ProductRepository from '../../../../../core/src/domain/product/repository';
import ProductService from '../../../../../core/src/domain/product/useCase';
import { BaseApiClient } from 'app/../core/src/infra';

const baseApiClient = new BaseApiClient({
  baseURL: 'https://fakestoreapi.com/',
});
const productRepository = new ProductRepository(baseApiClient);
const productService = new ProductService(productRepository);

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
