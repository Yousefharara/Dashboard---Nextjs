import { CategoryDialog } from "@/components/features/categories/CategoryDialog";
import CategoryList from "@/components/features/categories/CategoryList";
import { CategorySearch } from "@/components/features/categories/CategorySearch";
import { CategoryTable } from "@/components/features/categories/CategoryTable";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="p-4 border-b md:border-r md:border-b-0 h-full min-w-64">
        <h3 className="text-lg font-semibold mb-4">Categories</h3>
        <CategorySearch />

        <ul className="space-y-2 max-h-44 overflow-auto ">
          <CategoryList />
        </ul>

        <CategoryDialog title="Add Category">
          <Button variant="ghost" className="mt-4 w-full justify-start">
            <Plus className="mr-2 h-4 w-4" />
            Add Category
          </Button>
        </CategoryDialog>
      </div>

      <div className="p-[1rem] w-full">
        <div className="border rounded-xl overflow-hidden">
          <CategoryTable />
        </div>
      </div>
    </div>
  );
};

export default Page;
