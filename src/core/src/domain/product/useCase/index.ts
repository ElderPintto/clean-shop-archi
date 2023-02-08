import ProductRepository from "../repository";

export default class ProductService {
  private productRepository: ProductRepository;

  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  async getAllProducts() {
    return this.productRepository.getAll();
  }
  async getProductById(id: number) {
    return this.productRepository.getById(id);
  }
}
