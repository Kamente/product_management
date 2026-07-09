import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Stack,
    TextField
} from "@mui/material";

import {useEffect,useState} from "react";

export default function ProductDialog({
    open,
    product,
    onClose,
    onSave
}){

    const [form,setForm]=useState({
        name:"",
        description:"",
        category:"",
        price:"",
        quantity:""
    });

    useEffect(()=>{

        if(product){

            setForm(product);

        }else{

            setForm({
                name:"",
                description:"",
                category:"",
                price:"",
                quantity:""
            });

        }

    },[product]);

    const handleChange=(e)=>{

        setForm({
            ...form,
            [e.target.name]:e.target.value
        });

    };

    const handleSubmit=()=>{

        onSave(form);

    };

    return(

        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="sm"
        >

            <DialogTitle>

                {product?"Edit Product":"Add Product"}

            </DialogTitle>

            <DialogContent>

                <Stack spacing={2} mt={1}>

                    <TextField
                        label="Product Name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                    />

                    <TextField
                        label="Description"
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        multiline
                        rows={3}
                    />

                    <TextField
                        label="Category"
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                    />

                    <TextField
                        label="Price"
                        name="price"
                        type="number"
                        value={form.price}
                        onChange={handleChange}
                    />

                    <TextField
                        label="Quantity"
                        name="quantity"
                        type="number"
                        value={form.quantity}
                        onChange={handleChange}
                    />

                </Stack>

            </DialogContent>

            <DialogActions>

                <Button
                    onClick={onClose}
                >
                    Cancel
                </Button>

                <Button
                    variant="contained"
                    onClick={handleSubmit}
                >
                    Save
                </Button>

            </DialogActions>

        </Dialog>

    );

}