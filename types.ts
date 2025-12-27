
export type Category = 'All' | 'Dresses' | 'Tops' | 'Accessories' | 'Outerwear';

export interface Product {
  id: number;
  name: string;
  price: number;
  category: Category;
  image: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}
