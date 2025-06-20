"use client";

import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CardDescription } from "@/components/ui/card";

type Invoice = {
  id: string;
  customer: string;
  amount: number;
  status: "Paid" | "Pending" | "Overdue";
  date: string;
};

const invoices: Invoice[] = [
  { id: "INV001", customer: "Alice Wonderland", amount: 250.00, status: "Paid", date: "2023-03-01" },
  { id: "INV002", customer: "Bob The Builder", amount: 150.75, status: "Pending", date: "2023-03-15" },
  { id: "INV003", customer: "Charlie Chaplin", amount: 350.00, status: "Overdue", date: "2023-02-20" },
  { id: "INV004", customer: "Diana Prince", amount: 450.50, status: "Paid", date: "2023-03-05" },
  { id: "INV005", customer: "Edward Scissorhands", amount: 200.00, status: "Pending", date: "2023-03-20" },
];

export default function SampleShadcnTable() {
  return (
    <div className="space-y-4">
      <Table>
        <TableCaption>A list of recent invoices. This table uses ShadCN/UI components.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id} className="transition-colors hover:bg-muted/80">
              <TableCell className="font-medium">{invoice.id}</TableCell>
              <TableCell>{invoice.customer}</TableCell>
              <TableCell>
                <Badge 
                  variant={
                    invoice.status === "Paid" ? "default" : 
                    invoice.status === "Pending" ? "secondary" : 
                    "destructive"
                  }
                  className={
                    invoice.status === "Paid" ? "bg-green-500/20 text-green-700 border-green-500/50" :
                    invoice.status === "Pending" ? "bg-yellow-500/20 text-yellow-700 border-yellow-500/50" :
                    "bg-red-500/20 text-red-700 border-red-500/50"
                  }
                >
                  {invoice.status}
                </Badge>
              </TableCell>
              <TableCell>{invoice.date}</TableCell>
              <TableCell className="text-right">${invoice.amount.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <CardDescription className="text-xs text-muted-foreground">
        Note: The original request specified AG-Grid. As AG-Grid is not part of the pre-installed dependencies and adding new NPM packages is restricted, this ShadCN/UI table is provided as an alternative. AG-Grid integration would require installing `ag-grid-react` and `ag-grid-community` packages.
      </CardDescription>
    </div>
  );
}
