import { AppSidebar } from "@/components/app-sidebar";
import Header from "@/components/features/dashboard/Header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import CategoryProvider from "@/context/CategoryProvider";
import ProductProvider from "@/context/ProductProvider";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <SidebarProvider>
        <ProductProvider>
          <CategoryProvider>
            <AppSidebar />
            <SidebarInset>
              <Header />
              <div className="flex flex-1 flex-col gap-4 p-4 pt-0 overflow-hidden">
                {children}
              </div>
            </SidebarInset>
          </CategoryProvider>
        </ProductProvider>
      </SidebarProvider>
    </>
  );
};

export default Layout;
