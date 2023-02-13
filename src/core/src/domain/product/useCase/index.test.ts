import BaseApiClient from "../../../infra/clients/baseApiClient";
import ProductRepository from "../repository";
import ProductService from "./index";
import { Product } from "../entity";
import { describe, it, assert, expect } from "vitest";

const baseApiClient = new BaseApiClient({
  baseURL: "https://fakestoreapi.com/",
});
const productRepository = new ProductRepository(baseApiClient);
const productService = new ProductService(productRepository);

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
