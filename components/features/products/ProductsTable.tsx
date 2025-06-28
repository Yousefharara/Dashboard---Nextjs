"use client";

import { ProductAlertDialog } from "@/components/common/ProductAlertDialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// import { productsData } from "@/constant/products";
import { useProduct } from "@/context/ProductProvider";
import { cn } from "@/lib/utils";
import { Edit, XIcon } from "lucide-react";

import Image from "next/image";
import React from "react";
import ProductsEdit from "./ProductsEdit";
import { useCategory } from "@/context/CategoryProvider";

const ProductsTable = () => {
  const { products, searchTerm } = useProduct();
  const { selectedCategory } = useCategory();

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All Products"
        ? true
        : product.category.name === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Table className="min-w-2xl overflow-x-auto">
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Stock</TableHead>
          <TableHead>Sales</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-center">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredProducts.map((product) => (
          <TableRow key={product.id}>
            <TableCell className="flex items-center gap-2">
              <Image
                width={100}
                height={100}
                src={product.image}
                alt={product.name}
                className="w-20 h-20 object-cover rounded"
              />
              {product.name}
            </TableCell>
            <TableCell>{product.category.name}</TableCell>
            <TableCell>${product.price}</TableCell>
            <TableCell>{product.stock}</TableCell>
            <TableCell>{product.sales}</TableCell>
            <TableCell>
              <span
                className={
                  product.stock > 0 ? "text-green-600" : "text-red-600"
                }
              >
                {product.stock > 0 ? "Available" : "Out of stock"}
              </span>
            </TableCell>
            <TableCell className="">
              <div className="flex gap-4 items-center justify-center">
                <ProductAlertDialog id={product.id}>
                  <button
                    className={cn(
                      "p-1 focus:outline-2 focus:border-neutral-400 rounded-md border border-r-neutral-300 transition"
                    )}
                  >
                    <XIcon color="#7777" size={17} />
                  </button>
                </ProductAlertDialog>
                <ProductsEdit product={product}>
                  <button
                    className={cn(
                      "p-1 focus:outline-2 focus:border-neutral-400 rounded-md border border-r-neutral-300 transition"
                    )}
                  >
                    <Edit color="#7777" size={17} />
                  </button>
                </ProductsEdit>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ProductsTable;
