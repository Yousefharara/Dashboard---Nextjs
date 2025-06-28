import { mouse, smartWatch, wirless } from "@/public/images/exporting";
import { Product } from "@/types/product";
import { categoriesData } from "./category";

export const productsData : Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    image: wirless,
    price: 99.99,
    stock: 12,
    sales: 83,
    category: categoriesData[2]
  },
  { 
    id: "2",
    name: "Smart Watch",
    image: smartWatch,
    price: 149.5,
    stock: 5,
    sales: 120,
    category: categoriesData[1]
  },
  {
    id: "3",
    name: "Gaming Mouse",
    image: mouse,
    price: 49.99,
    stock: 0,
    sales: 75,
    category: categoriesData[2]
  },
];
