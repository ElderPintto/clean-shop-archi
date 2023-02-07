import { BaseApiClient } from "../../../infra";
import { Product } from "../entity";

export default class ProductRepository extends BaseApiClient {
  private endpoint: string = "products";

  async getAll(): Promise<Product[]> {
    const response = await this.get(this.endpoint);
    return response.map(
      (product: Product) =>
        new Product(product.id, product.title, product.price, product.image)
    );
  }
  async getById(id: number): Promise<Product> {
    const response = await this.get(`${this.endpoint}/${id}`);
    return new Product(
      response.id,
      response.title,
      response.price,
      response.image
    );
  }
}
