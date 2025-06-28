"use client";

import { categoriesData } from "@/constant/category";
import { Category } from "@/types/category";
import React, { createContext, ReactNode, useContext, useState } from "react";

type CategoryContextType = {
  categories: Category[];
  addCategory: (name: string) => void;
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

const CategoryContext = createContext<CategoryContextType | undefined>(
  undefined
);

const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [categories, setCategories] = useState<Category[]>(categoriesData);
  const [selectedCategory, setSelectedCategory] =
    useState<string>("All Products");
  const [searchTerm, setSearchTerm] = useState("");

  const addCategory = (name: string) => {
    const newCategory: Category = {
      id: crypto.randomUUID(),
      name: name,
    };
    setCategories((prev) => [...prev, newCategory]);
  };

  return (
    <CategoryContext.Provider
      value={{
        categories,
        addCategory,
        selectedCategory,
        setSelectedCategory,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => {
  const context = useContext(CategoryContext);
  if (!context) throw new Error("Error in category !");
  return context;
};

export default CategoryProvider;
