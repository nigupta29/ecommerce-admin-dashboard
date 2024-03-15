import Table from "@/components/ui/table"
import TableBody from "@/components/ui/table/table-body"
import TableCell from "@/components/ui/table/table-cell"
import TableHeading from "@/components/ui/table/table-heading"
import TableHead from "@/components/ui/table/table-head"
import TableRow from "@/components/ui/table/table-row"
import Link from "next/link"

export default function TransactionsTable() {
  return (
    <Table>
      <TableHead>
        <TableHeading>Name</TableHeading>
        <TableHeading>Status</TableHeading>
        <TableHeading>Date</TableHeading>
        <TableHeading>Amount</TableHeading>
        <TableHeading>Action</TableHeading>
      </TableHead>
      <TableBody>
        {"qwerty".split("").map((item) => (
          <TableRow key={item}>
            <TableHeading scope="row">John Doe</TableHeading>
            <TableCell>Pending</TableCell>
            <TableCell>14.02.2024</TableCell>
            <TableCell>$2999</TableCell>
            <TableCell>
              <Link
                href="/"
                className="font-medium text-green-600 hover:underline dark:text-green-500"
              >
                Edit
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
