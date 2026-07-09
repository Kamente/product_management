import {useEffect,useState} from "react";
import {
Dialog,
DialogTitle,
DialogContent,
DialogActions,
TextField,
Button,
MenuItem
} from "@mui/material";

export default function UserDialog({
open,
user,
onClose,
onSave
}){

const [form,setForm]=useState({
username:"",
email:"",
password:"",
role:"USER"
});

useEffect(()=>{

if(user){

setForm({
username:user.username,
email:user.email,
password:"",
role:user.role
});

}else{

setForm({
username:"",
email:"",
password:"",
role:"USER"
});

}

},[user]);

const handleChange=e=>{

setForm({
...form,
[e.target.name]:e.target.value
});

};

return(

<Dialog
open={open}
onClose={onClose}
fullWidth
maxWidth="sm"
>

<DialogTitle>

{user?"Edit User":"Add User"}

</DialogTitle>

<DialogContent>

<TextField
margin="normal"
fullWidth
label="Username"
name="username"
value={form.username}
onChange={handleChange}
/>

<TextField
margin="normal"
fullWidth
label="Email"
name="email"
value={form.email}
onChange={handleChange}
/>

<TextField
margin="normal"
fullWidth
label="Password"
name="password"
type="password"
value={form.password}
onChange={handleChange}
/>

<TextField
select
margin="normal"
fullWidth
label="Role"
name="role"
value={form.role}
onChange={handleChange}
>

<MenuItem value="USER">USER</MenuItem>
<MenuItem value="ADMIN">ADMIN</MenuItem>

</TextField>

</DialogContent>

<DialogActions>

<Button onClick={onClose}>
Cancel
</Button>

<Button
variant="contained"
onClick={()=>onSave(form)}
>

Save

</Button>

</DialogActions>

</Dialog>

);

}