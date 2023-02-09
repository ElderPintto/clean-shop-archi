export interface Todo {
  id: number;
  content: string;
}

export interface rating {
  [key: string]: number;
  rate: number;
  count: number;
}

export interface product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}
export interface Meta {
  totalCount: number;
}
