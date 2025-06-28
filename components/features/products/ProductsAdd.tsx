import React, { ReactNode } from "react";
import { ProductDialog } from "./ProductDialog";

const ProductsAdd = ({children} : {children: ReactNode}) => {
  return (
    <ProductDialog dialogType="add" title="Add Product">
      {children}
    </ProductDialog>
  );
};

export default ProductsAdd;
