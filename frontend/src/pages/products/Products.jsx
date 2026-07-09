import { useEffect, useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";
import TextField from "@mui/material/TextField";

import {

    Typography,
    Button,
    Box,
    Paper,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    TablePagination,
    CircularProgress

} from "@mui/material";

import { getProducts } from "../../services/productService";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [totalElements, setTotalElements] = useState(0);
    const [search, setSearch] = useState("");

    useEffect(() => {

        loadProducts();

    }, [page, rowsPerPage]);

    const loadProducts = async () => {

        try {

            setLoading(true);
            const res = await getProducts(
                page,
                rowsPerPage,
                "id",
                "asc"

            );

            setProducts(res.data.content);
            setTotalElements(res.data.totalElements);

        }

        catch (err) {
            console.log(err);

        }

        finally {
            setLoading(false);

        }

    };

    return (
        <DashboardLayout>
            <Box>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={3}

                >

                    <TextField
                        label="Search Products"
                        value = {search}
                        onChange={(e) => setSearch(e.target.value)}
                        sx={{ width: 350 }}
                    />
                    
                    <Button variant="contained">
                        Add Product
                    </Button>

                </Box>

                <Paper>

                    {

                        loading ?

                            (

                                <Box

                                    display="flex"

                                    justifyContent="center"

                                    p={5}

                                >

                                    <CircularProgress />

                                </Box>

                            )

                            :

                            (

                                <>

                                    <Table>

                                        <TableHead>

                                            <TableRow>

                                                <TableCell>ID</TableCell>

                                                <TableCell>Name</TableCell>

                                                <TableCell>Category</TableCell>

                                                <TableCell>Price</TableCell>

                                                <TableCell>Quantity</TableCell>

                                            </TableRow>

                                        </TableHead>

                                        <TableBody>

                                            {

                                                products.map(product => (

                                                    <TableRow key={product.id}>

                                                        <TableCell>

                                                            {product.id}

                                                        </TableCell>

                                                        <TableCell>

                                                            {product.name}

                                                        </TableCell>

                                                        <TableCell>

                                                            {product.category}

                                                        </TableCell>

                                                        <TableCell>

                                                            KSh {product.price}

                                                        </TableCell>

                                                        <TableCell>

                                                            {product.quantity}

                                                        </TableCell>

                                                    </TableRow>

                                                ))

                                            }

                                        </TableBody>

                                    </Table>

                                    <TablePagination

                                        component="div"

                                        count={totalElements}

                                        page={page}

                                        rowsPerPage={rowsPerPage}

                                        onPageChange={(e, newPage) =>

                                            setPage(newPage)

                                        }

                                        onRowsPerPageChange={(e) => {

                                            setRowsPerPage(

                                                parseInt(e.target.value)

                                            );

                                            setPage(0);

                                        }}

                                    />

                                </>

                            )

                    }

                </Paper>

            </Box>

        </DashboardLayout>

    );

}