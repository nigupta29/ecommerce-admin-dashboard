import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeading,
  TableImageCell,
  TableRow
} from "@/components/ui/table"

export default function ProductsTable() {
  return (
    <Table>
      <TableHead>
        <TableHeading>Image</TableHeading>
        <TableHeading>Name</TableHeading>
        <TableHeading>Desc</TableHeading>
        <TableHeading>Price</TableHeading>
        <TableHeading>Stock</TableHeading>
        <TableHeading>Created At</TableHeading>
        <TableHeading>Action</TableHeading>
      </TableHead>
      <TableBody>
        {"qwerty".split("").map((item) => (
          <TableRow key={item}>
            <TableImageCell src="/product.jpg" alt="iphone image" />
            <TableHeading scope="row">Iphone 15</TableHeading>
            <TableCell>
              <div className="truncate">
                {`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
                rem velit cumque et odio quibusdam quod explicabo, dolorum culpa
                qui laudantium quaerat ullam reprehenderit expedita tempora
                alias beatae deserunt consectetur soluta obcaecati tenetur
                aliquid iusto. Voluptatum saepe veritatis commodi vitae quaerat
                ullam quam, nam tenetur laudantium ab delectus esse
                necessitatibus dolorem ipsum velit sit modi, expedita animi quae
                reprehenderit, a autem officiis. Nobis ex facere cum recusandae
                quis eum dolore explicabo doloremque? Reprehenderit nam
                temporibus sunt inventore eligendi deserunt optio cumque itaque
                recusandae ipsam laborum illum quam placeat ut, quo, debitis,
                hic sapiente adipisci harum ad. Nisi unde, amet obcaecati hic
                odit accusamus distinctio fuga eaque, illum maxime soluta minus
                enim ex? Minus magni, minima autem id nihil quisquam ipsa eaque
                deserunt laudantium at deleniti obcaecati sunt quis? Corporis
                fugit nihil officiis modi molestias nesciunt, quidem natus vero
                voluptatum nobis iusto quae accusamus quos dolore quis voluptas
                necessitatibus minus aliquam?`.slice(0, 30)}
                ...
              </div>
            </TableCell>
            <TableCell>$2999</TableCell>
            <TableCell>34</TableCell>
            <TableCell>14.02.2024</TableCell>
            <TableCell>
              <div className="flex space-x-2">
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
