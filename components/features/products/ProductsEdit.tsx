import React, { ReactNode } from "react";
import { ProductDialog } from "./ProductDialog";
import { Product } from "@/types/product";

const ProductsEdit = ({
  children,
  product,
}: {
  children: ReactNode;
  product: Product;
}) => {
  return (
    <ProductDialog dialogType="edit" title="Edit Product" product={product}>
      {children}
    </ProductDialog>
  );
};

export default ProductsEdit;
