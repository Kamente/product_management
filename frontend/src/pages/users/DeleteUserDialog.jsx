import {
Dialog,
DialogTitle,
DialogContent,
DialogActions,
Button,
Typography
} from "@mui/material";

export default function DeleteUserDialog({
open,
user,
onClose,
onDelete
}){

return(

<Dialog
open={open}
onClose={onClose}
>

<DialogTitle>

Delete User

</DialogTitle>

<DialogContent>

<Typography>

Delete {user?.username}?

</Typography>

</DialogContent>

<DialogActions>

<Button onClick={onClose}>
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