import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Category } from "./category";

export type Product = {
  id: string;
  name: string;
  price: number;
  image: StaticImport | string ; // blob URL أو base64
  stock: number;
  sales:number;
  category: Category
};