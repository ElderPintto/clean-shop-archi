import { BaseApiClient } from "../../../infra";
import { Product } from "../entity";
import ProductRepository from "../repository";
import { describe, it, expect } from "vitest";

const baseApiClient = new BaseApiClient({
  baseURL: "https://fakestoreapi.com/",
});
const productRepository = new ProductRepository(baseApiClient);

describe("addProduct", () => {
  it("should add a new product to the list", () => {
    const productList: Product[] = [];
    const product = {
      id: 1,
      title: "Test Product",
      price: 5,
      category: "Test Category",
      description: "Test Description",
      image: "Test Image",
    };

    const expectedList = [
      {
        id: 1,
        title: "Test Product",
        price: 5,
        category: "Test Category",
        description: "Test Description",
        image: "Test Image",
        quantityInCart: 1,
      },
    ];

    expect(productRepository.addProduct(product, productList)).toEqual(
      expectedList
    );
  });

  it("should not add a product to the list if it already exists", () => {
    const productList = [
      {
        id: 1,
        title: "Test Product",
        price: 5,
        category: "Test Category",
        description: "Test Description",
        image: "Test Image",
        quantityInCart: 2,
      },
    ];
    const product = {
      id: 1,
      title: "Test Product",
      price: 5,
      category: "Test Category",
      description: "Test Description",
      image: "Test Image",
    };

    expect(productRepository.addProduct(product, productList)).toEqual(
      productList
    );
  });
});
