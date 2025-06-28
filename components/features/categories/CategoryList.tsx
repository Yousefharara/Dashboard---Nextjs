"use client";
import { useCategory } from "@/context/CategoryProvider";
import { cn } from "@/lib/utils";
import React from "react";

const CategoryList = () => {
  const { categories, selectedCategory, setSelectedCategory, searchTerm } =
    useCategory();

  const onSelected = (name: string) => {
    setSelectedCategory(name);
    console.log(name);
  };
  return (
    <>
      {categories
        .filter((filter) =>
          filter.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((cat) => (
          <li key={cat.id}>
            <button
              onClick={() => onSelected(cat.name)}
              className={cn(
                "w-full text-left px-3 py-2 rounded-md hover:bg-muted",
                selectedCategory === cat.name && "bg-muted font-semibold"
              )}
            >
              {cat.name}
            </button>
          </li>
        ))}
    </>
  );
};

export default CategoryList;
