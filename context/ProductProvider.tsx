"use client";

import { categoriesData } from "@/constant/category";
import { productsData } from "@/constant/products";
import { Category } from "@/types/category";
import { Product } from "@/types/product";
import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

type ProductContextType = {
  products: Product[];
  addProduct: (product: Product) => void;
  editProduct: (product: Product) => void;
  deleteProduct: (id: string) => void;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  category: Category;
  setCategory: React.Dispatch<React.SetStateAction<Category>>;
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

const ProductProvider = ({ children }: { children: ReactNode }) => {

  const [products, setProducts] = useState<Product[]>(productsData);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [category, setCategory] = useState<Category>(categoriesData[0]);
  
  const addProduct = (product: Product) => {
    setProducts((prev) => [...prev, product]);
  };

  const deleteProduct = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const editProduct = (updateProduct: Product) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === updateProduct.id ? updateProduct : p))
    );
  };


  return (
    <ProductContext.Provider
      value={{
        products,
        searchTerm,
        addProduct,
        deleteProduct,
        setSearchTerm,
        editProduct,
        category,
        setCategory,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) throw new Error("No Product");
  return context;
};

export default ProductProvider;
