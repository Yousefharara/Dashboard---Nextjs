"use client";
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCategory } from "@/context/CategoryProvider";
import { v4 as uuidv4 } from "uuid"; // npm install uuid
import { Category } from "@/types/category";

type Props = {
    category: Category;
    setCategory: React.Dispatch<React.SetStateAction<Category>>
}

export function SelectedCategory({category, setCategory} : Props) {
  const { categories } = useCategory();

  const handleOnChange = (value: string) => {
    setCategory({
        id: uuidv4(),
        name: value
    })
  }

  return (
    <Select onValueChange={handleOnChange} value={category.name}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Categories</SelectLabel>
          {categories.map((cat) => (
            <SelectItem key={cat.id} value={cat.name}>
              {cat.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
