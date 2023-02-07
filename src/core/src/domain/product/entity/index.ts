export class Product {
  id: string;
  title: string;
  price: number;
  image: string;

  constructor(id: string, title: string, price: number, image: string) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.image = image;
  }

  getId() {
    return this.id;
  }

  getTitle() {
    return this.title;
  }

  getPrice() {
    return this.price;
  }

  getImage() {
    return this.image;
  }

  setTitle(title: string): void {
    this.title = title;
  }

  setPrice(price: number): void {
    this.price = price;
  }

  setImage(image: string): void {
    this.image = image;
  }
}
