import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { invoicesItemsModel } from "@/models";

export function TableInfo() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead>Username</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoicesItemsModel.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{item.id}</TableCell>
            <TableCell>{item.status}</TableCell>
            <TableCell>{item.method}</TableCell>
            <TableCell>{item.username}</TableCell>
            <TableCell className="text-right">{`$${item.amount}`}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
