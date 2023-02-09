export class Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  quantityInCart?: number;

  constructor(
    id: number,
    title: string,
    price: number,
    category: string,
    description: string,
    image: string,
    quantityInCart?: number
  ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.category = category;
    this.description = description;
    this.image = image;
    this.quantityInCart = quantityInCart;
  }
}
