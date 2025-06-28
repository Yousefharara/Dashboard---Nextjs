'use client'

import React from "react";

import { Input } from "@/components/ui/input";
import { useProduct } from "@/context/ProductProvider";
const ProductsSearch = () => {

    const {setSearchTerm, searchTerm} = useProduct();

    const hadnleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);
    }

  return (
    <>
      <Input onChange={hadnleSearch} value={searchTerm} placeholder="Search products..." className="max-w-sm" />
    </>
  );
};

export default ProductsSearch;
