import { AdminTitle } from "@/admin/components/AdminTitle"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { PlusIcon } from "lucide-react"
import { Link } from "react-router"

export const AdminProductsPage = () => {
    return (
        <>
            <div className="flex justify-between items-start">
                <AdminTitle
                    title="Products"
                    subtitle="Manage your products"
                />
                <div className="flex justify-end mb-10 gap-4">

                    <Link to='/admin/products/new'>
                        <Button>
                            <PlusIcon />
                            New Product
                        </Button>
                    </Link>
                </div>
            </div>
            <Table className="bg-white shadow-xs border border-gray-200 mb-10">
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Product</TableHead>
                        <TableHead>Image</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Inventory</TableHead>
                        <TableHead>Sizes</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">1</TableCell>
                        <TableCell>
                            <img src="https://placehold.co/250x250" alt="product"
                                className="w-20 h-20 object-cover rounded-md" />
                        </TableCell>
                        <TableCell>Product1</TableCell>
                        <TableCell>$250.00</TableCell>
                        <TableCell>Category1</TableCell>
                        <TableCell>100</TableCell>
                        <TableCell>XS, S, L</TableCell>
                        <TableCell>
                            <Link to={`/admin/products/${'t-shirt-teslo'}`}>
                                Edit
                            </Link>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>

            <CustomPagination totalPages={10} />
        </>
    )
}