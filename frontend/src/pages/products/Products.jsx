import {useEffect,useState} from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import ProductTable from "../../components/tables/ProductTable";
import ProductDialog from "../../components/products/ProductDialog";
import DeleteProductDialog from "../../components/products/DeleteProductDialog";

import {
    Box,
    Button,
    CircularProgress,
    Paper,
    TextField,
    Typography
} from "@mui/material";

import {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    searchProducts
} from "../../services/productService";

import {useAuth} from "../../contexts/AuthContext";
import {toast} from "react-toastify";

export default function Products(){

    const {user}=useAuth();

    const [products,setProducts]=useState([]);
    const [loading,setLoading]=useState(true);

    const [page,setPage]=useState(0);
    const [rowsPerPage,setRowsPerPage]=useState(10);
    const [totalElements,setTotalElements]=useState(0);

    const [search,setSearch]=useState("");

    const [openDialog,setOpenDialog]=useState(false);
    const [selectedProduct,setSelectedProduct]=useState(null);

    const [openDelete,setOpenDelete]=useState(false);
    const [productToDelete,setProductToDelete]=useState(null);

    useEffect(()=>{
        loadProducts();
    },[page,rowsPerPage]);

    useEffect(()=>{

        const timer=setTimeout(()=>{

            if(search.trim()===""){
                loadProducts();
            }else{
                handleSearch();
            }

        },400);

        return ()=>clearTimeout(timer);

    },[search]);

    async function loadProducts(){

        try{

            setLoading(true);

            const res=await getProducts(
                page,
                rowsPerPage,
                "id",
                "asc"
            );

            setProducts(res.data.content);
            setTotalElements(res.data.totalElements);

        }catch(err){

            console.error(err);
            toast.error("Failed to load products");

        }finally{

            setLoading(false);

        }

    }

    async function handleSearch(){

        try{

            const res=await searchProducts(
                search,
                "",
                "",
                "",
                page,
                rowsPerPage
            );

            setProducts(res.data.content);
            setTotalElements(res.data.totalElements);

        }catch(err){

            console.error(err);

        }

    }

    const exportJSON=()=>{

        const json=JSON.stringify(products,null,2);

        const blob=new Blob([json],{
            type:"application/json"
        });

        const url=window.URL.createObjectURL(blob);

        const link=document.createElement("a");

        link.href=url;
        link.download="products.json";

        link.click();

        window.URL.revokeObjectURL(url);

};

    async function handleSave(product){

        try{

            if(selectedProduct){

                await updateProduct(
                    selectedProduct.id,
                    product
                );

                toast.success("Product updated");

            }else{

                await createProduct(product);

                toast.success("Product created");

            }

            setOpenDialog(false);
            setSelectedProduct(null);

            loadProducts();

        }catch(err){

            console.error(err);
            toast.error("Operation failed");

        }

    }

    async function handleDelete(){

        try{

            await deleteProduct(productToDelete.id);

            toast.success("Product deleted");

            setOpenDelete(false);
            setProductToDelete(null);

            loadProducts();

        }catch(err){

            console.error(err);
            toast.error("Delete failed");

        }

    }

    return(

        <DashboardLayout>

            <Box>

                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={3}
                >

                    <Typography
                        variant="h4"
                        fontWeight="bold"
                    >
                        Products
                    </Typography>

                    <Box
                        display="flex"
                        gap={2}
                    >

                        <TextField
                            label="Search Products"
                            value={search}
                            onChange={(e)=>setSearch(e.target.value)}
                            size="small"
                            sx={{width:320}}
                        />

                        {user?.role==="ADMIN" && (

                            <Button
                                variant="contained"
                                onClick={()=>{
                                    setSelectedProduct(null);
                                    setOpenDialog(true);
                                }}
                            >
                                Add Product
                            </Button>

                        )}

                    </Box>

                </Box>

                <Paper>

                    {loading?

                        <Box
                            display="flex"
                            justifyContent="center"
                            p={5}
                        >
                            <CircularProgress/>
                        </Box>

                        :

                        <ProductTable
                            products={products}
                            page={page}
                            rowsPerPage={rowsPerPage}
                            totalElements={totalElements}
                            onPageChange={(e,newPage)=>setPage(newPage)}
                            onRowsPerPageChange={(e)=>{
                                setRowsPerPage(parseInt(e.target.value));
                                setPage(0);
                            }}
                            onEdit={(product)=>{
                                setSelectedProduct(product);
                                setOpenDialog(true);
                            }}
                            onDelete={(product)=>{
                                setProductToDelete(product);
                                setOpenDelete(true);
                            }}
                        />

                    }

                </Paper>

            </Box>

            <ProductDialog
                open={openDialog}
                product={selectedProduct}
                onClose={()=>{
                    setOpenDialog(false);
                    setSelectedProduct(null);
                }}
                onSave={handleSave}
            />

            <DeleteProductDialog
                open={openDelete}
                product={productToDelete}
                onClose={()=>{
                    setOpenDelete(false);
                    setProductToDelete(null);
                }}
                onDelete={handleDelete}
            />

        </DashboardLayout>

    );
    

}