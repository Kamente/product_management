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

import {useAuth} from "../../contexts/AuthContext";

export default function ProductTable({
    products,
    page,
    rowsPerPage,
    totalElements,
    onPageChange,
    onRowsPerPageChange,
    onEdit,
    onDelete
}){

    const {user}=useAuth();

    const isAdmin=user?.role==="ADMIN";

    return(
        <>

            <Table>

                <TableHead>

                    <TableRow>

                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="center">Quantity</TableCell>

                        {isAdmin&&(
                            <TableCell align="center">
                                Actions
                            </TableCell>
                        )}

                    </TableRow>

                </TableHead>

                <TableBody>

                    {products.map(product=>(

                        <TableRow key={product.id} hover>

                            <TableCell>{product.id}</TableCell>

                            <TableCell>{product.name}</TableCell>

                            <TableCell>{product.description}</TableCell>

                            <TableCell>{product.category}</TableCell>

                            <TableCell align="right">
                                KSh {Number(product.price).toLocaleString()}
                            </TableCell>

                            <TableCell align="center">
                                {product.quantity}
                            </TableCell>

                            {isAdmin&&(
                                <TableCell align="center">

                                    <IconButton
                                        color="primary"
                                        onClick={()=>onEdit(product)}
                                    >
                                        <EditIcon/>
                                    </IconButton>

                                    <IconButton
                                        color="error"
                                        onClick={()=>onDelete(product)}
                                    >
                                        <DeleteIcon/>
                                    </IconButton>

                                </TableCell>
                            )}

                        </TableRow>

                    ))}

                </TableBody>

            </Table>

            <TablePagination
                component="div"
                count={totalElements}
                page={page}
                rowsPerPage={rowsPerPage}
                onPageChange={onPageChange}
                onRowsPerPageChange={onRowsPerPageChange}
            />

        </>
    );

}