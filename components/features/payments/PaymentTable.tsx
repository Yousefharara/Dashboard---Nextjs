import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { paymentsData } from "@/constant/paymentsData";

const getPaymentStatusStyle = (status: string) => {
  switch (status) {
    case "Paid":
      return "bg-green-100 text-green-800";
    case "Pending":
      return "bg-yellow-100 text-yellow-800";
    case "Failed":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

// { payments }: { payments: typeof paymentsData }
const PaymentsTable = () => {

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Payment History</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Method</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paymentsData.map((payment) => (
            <TableRow key={payment.id}>
              <TableCell>{payment.id}</TableCell>
              <TableCell>{payment.customer}</TableCell>
              <TableCell>${payment.amount.toFixed(2)}</TableCell>
              <TableCell>{payment.method}</TableCell>
              <TableCell>
                <Badge className={getPaymentStatusStyle(payment.status)}>
                  {payment.status}
                </Badge>
              </TableCell>
              <TableCell>{payment.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PaymentsTable;
