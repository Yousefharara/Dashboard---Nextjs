import ProductsAdd from "@/components/features/products/ProductsAdd";
import ProductsSearch from "@/components/features/products/ProductsSearch";
import ProductsTable from "@/components/features/products/ProductsTable";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

export default function Page() {
  return (
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Products</h2>
            <ProductsAdd>
              <Button>Add Prodcut</Button>
            </ProductsAdd>
          </div>

          {/* Search */}
          <div className="flex gap-4 items-center">
            {/* في المستقبل ممكن نضيف فلاتر هنا */}
            <ProductsSearch />
            <div className="rounded-md p-2 hover:outline-2 hover:border-neutral-400 border border-neutral-300">
              <Filter color="#777" size={17} />
            </div>
          </div>

          {/* Table */}
          <div className="border rounded-xl overflow-hidden overflow-x-auto">
            <ProductsTable />
          </div>
        </div>
  );
}
