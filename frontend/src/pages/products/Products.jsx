import { useEffect, useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import {

    Box,

    Typography,

    Button,

    Paper

} from "@mui/material";

import ProductTable from "../../components/tables/ProductTable";

import {

    getProducts

} from "../../services/productService";

export default function Products(){

    const [products,setProducts]=useState([]);

    useEffect(()=>{

        loadProducts();

    },[]);

    const loadProducts=async()=>{

        try{

            const res=await getProducts();

            setProducts(res.data.content);

        }

        catch(err){

            console.log(err);

        }

    };

    return(

        <DashboardLayout>

            <Box>

                <Box

                    display="flex"

                    justifyContent="space-between"

                    mb={3}

                >

                    <Typography

                        variant="h4"

                    >

                        Products

                    </Typography>

                    <Button

                        variant="contained"

                    >

                        Add Product

                    </Button>

                </Box>

                <Paper>

                    <ProductTable

                        products={products}

                        onEdit={(product)=>console.log(product)}

                        onDelete={(id)=>console.log(id)}

                    />

                </Paper>

            </Box>

        </DashboardLayout>

    );

}