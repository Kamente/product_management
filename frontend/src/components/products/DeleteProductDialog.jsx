import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button
} from "@mui/material";

export default function DeleteProductDialog({
    open,
    product,
    onClose,
    onDelete
}) {

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="xs"
            fullWidth
        >

            <DialogTitle>
                Delete Product
            </DialogTitle>

            <DialogContent>

                <DialogContentText>

                    Are you sure you want to delete

                    <strong> {product?.name}</strong>?

                </DialogContentText>

            </DialogContent>

            <DialogActions>

                <Button
                    onClick={onClose}
                >
                    Cancel
                </Button>

                <Button
                    color="error"
                    variant="contained"
                    onClick={onDelete}
                >
                    Delete
                </Button>

            </DialogActions>

        </Dialog>
    );

}