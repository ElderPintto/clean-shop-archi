import ProductService from "./index";
import { describe, it, assert, expect } from "vitest";

let productService = new ProductService({
  baseURL: "https://fakestoreapi.com/",
});

describe("suite", () => {
  it("get all product", async () => {
    let products = await productService.getAllProducts();
    assert.equal(Array.isArray(products), true, "Result should be an array");
  });
  it("get product by ID", async () => {
    let product = await productService.getProductById(1);
    expect(product).toEqual({
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    });
  });
});