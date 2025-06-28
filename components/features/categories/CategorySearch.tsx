"use client";

import { Input } from "@/components/ui/input";
import { useCategory } from "@/context/CategoryProvider";
import React from "react";

export function CategorySearch() {
  const { searchTerm, setSearchTerm } = useCategory();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Input
      onChange={onChange}
      value={searchTerm}
      placeholder="Search categories..."
      className="mb-4"
    />
  );
}
