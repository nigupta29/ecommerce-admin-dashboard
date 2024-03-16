import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeading,
  TableRow
} from "@/components/ui/table"

export default function UsersTable() {
  return (
    <Table>
      <TableHead>
        <TableHeading>Name</TableHeading>
        <TableHeading>Email</TableHeading>
        <TableHeading>Created At</TableHeading>
        <TableHeading>Role</TableHeading>
        <TableHeading>Status</TableHeading>
        <TableHeading>Action</TableHeading>
      </TableHead>
      <TableBody>
        {"qwerty".split("").map((item) => (
          <TableRow key={item}>
            <TableHeading scope="row">John Doe</TableHeading>
            <TableCell>john.doe@gmail.com</TableCell>
            <TableCell>14.02.2024</TableCell>
            <TableCell>admin</TableCell>
            <TableCell>active</TableCell>
            <TableCell>
              <div className="space-x-2">
                <button className="font-medium text-green-600 hover:underline dark:text-green-500">
                  View
                </button>
                <button className="font-medium text-red-600 hover:underline dark:text-red-500">
                  Delete
                </button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
