import { BaseApiClient } from "../../../infra";
import { Product } from "../entity";

export default class ProductRepository {
  private baseApiClient: BaseApiClient;
  private endpoint: string = "products";

  constructor(baseApiClient: BaseApiClient) {
    this.baseApiClient = baseApiClient;
  }

  async getAll(): Promise<Product[]> {
    const response = await this.baseApiClient.get(this.endpoint);
    return response.map(
      (product: Product) =>
        new Product(
          product.id,
          product.title,
          product.price,
          product.category,
          product.description,
          product.image
        )
    );
  }

  async getById(id: number): Promise<Product> {
    const response = await this.baseApiClient.get(`${this.endpoint}/${id}`);
    return new Product(
      response.id,
      response.title,
      response.price,
      response.category,
      response.description,
      response.image
    );
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
