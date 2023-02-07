import ProductRepository from "../repository";

export default class ProductService extends ProductRepository {
  async getAllProducts() {
    return this.getAll();
  }
  async getProductById(id: number) {
    return this.getById(id);
  }
}
