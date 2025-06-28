import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { recentOrders } from "@/constant/recentOrders"

export function OrderTable() {
  return (
    <Table className="max-w-4xl mx-auto ">
      <TableCaption>A list of your recent orders.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">Customer</TableHead>
          <TableHead className="">Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recentOrders.map((order) => (
          <TableRow key={order.customer}>
            <TableCell className="font-medium">{order.customer}</TableCell>
            <TableCell>{order.date}</TableCell>
            <TableCell>{order.status}</TableCell>
            <TableCell className="text-right">{order.total}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
