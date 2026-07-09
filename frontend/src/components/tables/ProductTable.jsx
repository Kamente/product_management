import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    IconButton,
    TablePagination
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ProductTable({
    products,
    page,
    rowsPerPage,
    totalElements,
    onPageChange,
    onRowsPerPageChange,
    onEdit,
    onDelete
}) {

    return (
        <>
            <Table>

                <TableHead>

                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Quantity</TableCell>
                        <TableCell align="center">Actions</TableCell>
                    </TableRow>

                </TableHead>

                <TableBody>

                    {products.map(product => (

                        <TableRow key={product.id} hover>

                            <TableCell>{product.id}</TableCell>

                            <TableCell>{product.name}</TableCell>

                            <TableCell>{product.category}</TableCell>

                            <TableCell>
                                KSh {Number(product.price).toLocaleString()}
                            </TableCell>

                            <TableCell>{product.quantity}</TableCell>

                            <TableCell align="center">

                                <IconButton
                                    color="primary"
                                    onClick={() => onEdit(product)}
                                >
                                    <EditIcon/>
                                </IconButton>

                                <IconButton
                                    color="error"
                                    onClick={() => onDelete(product)}
                                >
                                    <DeleteIcon/>
                                </IconButton>

                            </TableCell>

                        </TableRow>

                    ))}

                </TableBody>

            </Table>

            <TablePagination
                component="div"
                page={page}
                rowsPerPage={rowsPerPage}
                count={totalElements}
                onPageChange={onPageChange}
                onRowsPerPageChange={onRowsPerPageChange}
            />
        </>
    );

}