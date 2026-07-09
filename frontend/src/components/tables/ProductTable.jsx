import {

    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    IconButton

} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";

import DeleteIcon from "@mui/icons-material/Delete";

export default function ProductTable({
    products,
    onEdit,
    onDelete

}){

    return(
        <Table>
            <TableHead>

                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>

            <TableBody>

                {

                    products.map(product=>(

                        <TableRow key={product.id}>

                            <TableCell>{product.id}</TableCell>
                            <TableCell>{product.name}</TableCell>
                            <TableCell>{product.category}</TableCell>
                            <TableCell>{product.price}</TableCell>
                            <TableCell>{product.quantity}</TableCell>
                            <TableCell>

                                <IconButton
                                    onClick={()=>onEdit(product)}
                                >

                                    <EditIcon/>

                                </IconButton>

                                <IconButton
                                    color="error"
                                    onClick={()=>onDelete(product.id)}
                                >

                                    <DeleteIcon/>

                                </IconButton>

                            </TableCell>

                        </TableRow>

                    ))

                }

            </TableBody>
        </Table>
    );

}
