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
import { ordersData } from "@/constant/ordersData";
import { cn } from "@/lib/utils";


const getOrderStatusStyle = (status: string) => {
  switch (status) {
    case "Pending":
      return "bg-yellow-100 text-yellow-800";
    case "Shipped":
      return "bg-blue-100 text-blue-800";
    case "Delivered":
      return "bg-green-100 text-green-800";
    case "Cancelled":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};



const OrderTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Order ID</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Order Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Total Amount</TableHead>
          <TableHead>Items</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {ordersData.map((order) => (
          <TableRow key={order.id}>
            <TableCell>{order.id}</TableCell>
            <TableCell>{order.customerName}</TableCell>
            <TableCell>{order.orderDate}</TableCell>
            <TableCell>
              <Badge variant={"outline"} className={cn(getOrderStatusStyle(order.status))}>
                {order.status}
              </Badge>
            </TableCell>
            <TableCell>${order.totalAmount.toFixed(2)}</TableCell>
            <TableCell>{order.itemsCount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default OrderTable;
