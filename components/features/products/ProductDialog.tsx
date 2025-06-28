"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import Image from "next/image";
import { ReactNode, useRef, useState } from "react";
import { useProduct } from "@/context/ProductProvider";
import { Product } from "@/types/product";
import { v4 as uuidv4 } from "uuid"; // npm install uuid
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { categoriesData } from "@/constant/category";
import { SelectedCategory } from "./SelectedCategory";
import { Category } from "@/types/category";

type DialogType = "edit" | "add";

type Props = {
  product?: Product;
  dialogType: DialogType;
  title: string;
  children: ReactNode;
};

export function ProductDialog({
  product = {
    id: "",
    image: "",
    name: "",
    price: 0,
    sales: 0,
    stock: 0,
    category: categoriesData[1],
  },
  title,
  dialogType,
  children,
}: Props) {
  const [imagePreview, setImagePreview] = useState<string | StaticImport>(
    product.image
  );
  const { editProduct, addProduct } = useProduct();

  const [nameInput, setNameInput] = useState<string>(product.name);
  const [priceInput, setPriceInput] = useState<number>(product.price);
  const [stockInput, setStockInput] = useState<number>(product.stock);
  const [category, setCategory] = useState<Category>(product.category);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  };

  const handleProduct = () => {
    if (!nameInput || !priceInput || !imagePreview) return;
    if (priceInput <= 0 || stockInput < 0) return;

    if (dialogType === "add") {
      const newProduct: Product = {
        id: uuidv4(),
        name: nameInput,
        price: priceInput,
        image: imagePreview,
        stock: stockInput,
        category: category,
        sales: 0,
      };

      addProduct(newProduct);
      console.log(newProduct);
      // Optionally: Reset inputs, close dialog...
      // Reset fields
      setNameInput("");
      setPriceInput(0);
      setStockInput(0);
      setImagePreview("");
    } else if (dialogType === "edit") {
      const edit: Product = {
        id: product.id,
        name: nameInput,
        price: priceInput,
        image: imagePreview,
        stock: stockInput,
        category: category,
        sales: product.sales,
      };
      editProduct(edit);
    }

    dialogCloseRef.current?.click();
  };

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value);
  };

  const handlePriceInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceInput(parseFloat(e.target.value));
  };

  const handleStockInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStockInput(parseInt(e.target.value));
  };

  const dialogCloseRef = useRef<HTMLButtonElement>(null);

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle> {/* Here */}
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Image</Label>
            <div className="col-span-3">
              <label
                htmlFor="image-upload"
                className="cursor-pointer w-24 h-24 border border-dashed rounded-xl flex items-center justify-center text-gray-400 hover:border-blue-500 transition"
              >
                {imagePreview ? (
                  <Image
                    src={imagePreview}
                    alt="Preview"
                    width={30}
                    height={30}
                    className="object-cover w-full h-full rounded-xl"
                  />
                ) : (
                  <Plus className="w-6 h-6" />
                )}
              </label>
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange} // Here
              />
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              name
            </Label>
            <Input
              onChange={handleNameInput}
              value={nameInput}
              id="name"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="price" className="text-right">
              price
            </Label>
            <Input
              onChange={handlePriceInput}
              value={priceInput}
              id="price"
              type="number"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="stock" className="text-right">
              Stock
            </Label>
            <Input
              onChange={handleStockInput}
              value={stockInput}
              id="stock"
              type="number"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="catgory" className="text-right">
              Category
            </Label>
            <SelectedCategory category={category} setCategory={setCategory}/>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleProduct}>
            Save changes
          </Button>
          <DialogClose asChild>
            <button ref={dialogCloseRef} className="sr-only">
              Close Dialog
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
