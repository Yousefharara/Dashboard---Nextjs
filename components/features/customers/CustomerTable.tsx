"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { customersData } from "@/constant/customersData";
import { cn } from "@/lib/utils";


// const getStatusVariant = (status: string) => {
//   switch (status) {
//     case "Active":
//       return "default"; // نستخدم default كخيار محايد/إيجابي
//     case "Inactive":
//       return "secondary"; // لون رمادي أو منخفض
//     case "Blocked":
//       return "destructive"; // لون أحمر
//     default:
//       return "outline"; // للمجهول مثلاً
//   }
// };

const getStatusStyle = (status: string) => {
  switch (status) {
    case "Active":
      return "bg-green-100 text-green-700";
    case "Inactive":
      return "bg-yellow-100 text-yellow-700";
    case "Blocked":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};



const CustomerTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Customer ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Join Date</TableHead>
          <TableHead>Orders</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {customersData.map((customer) => (
          <TableRow key={customer.id}>
            <TableCell>{customer.id}</TableCell>
            <TableCell>{customer.name}</TableCell>
            <TableCell>{customer.email}</TableCell>
            <TableCell>{customer.phone}</TableCell>
            <TableCell>{customer.joinDate}</TableCell>
            <TableCell>{customer.ordersCount}</TableCell>
            <TableCell>
              <Badge variant={"outline"} className={cn(getStatusStyle(customer.status))}>
                {customer.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CustomerTable;
