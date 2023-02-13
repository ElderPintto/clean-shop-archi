import { Product } from "../entity";
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

  addProduct(product: Product, productList: Product[]): Product[] | [] {
    product.quantityInCart = product.quantityInCart || 1;

    const newProduct = new Product(
      product.id,
      product.title,
      product.price,
      product.category,
      product.description,
      product.image,
      product.quantityInCart
    );

    const productIncart = productList.findIndex(
      (productItem) => productItem.id === newProduct.id
    );

    if (productIncart >= 0) {
      if (newProduct.quantityInCart)
        productList[productIncart].quantityInCart =
          newProduct.quantityInCart + 1;
      return productList;
    }

    productList.push(product);
    return productList;
  }
}
