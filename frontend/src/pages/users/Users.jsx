import {useEffect,useState} from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

import UserDialog from "./UserDialog";
import DeleteUserDialog from "./DeleteUserDialog";

import {
Box,
Paper,
Button,
Table,
TableHead,
TableBody,
TableRow,
TableCell,
Typography,
CircularProgress,
Stack
} from "@mui/material";

import {
getUsers,
createUser,
updateUser,
deleteUser,
promoteUser,
demoteUser
} from "../../services/userService";

export default function Users(){

    const [users,setUsers]=useState([]);
    const [loading,setLoading]=useState(true);

    const [openDialog,setOpenDialog]=useState(false);
    const [selectedUser,setSelectedUser]=useState(null);

    const [openDelete,setOpenDelete]=useState(false);
    const [userToDelete,setUserToDelete]=useState(null);

    useEffect(()=>{

        loadUsers();

    },[]);

    async function loadUsers(){

        try{

            setLoading(true);

            const res=await getUsers();

            setUsers(res.data);

        }catch(err){

            console.error(err);

        }finally{

            setLoading(false);

        }

    }

    async function handleSave(user){

        try{

            if(selectedUser){

                await updateUser(
                    selectedUser.id,
                    user
                );

            }else{

                await createUser(user);

            }

            setOpenDialog(false);
            setSelectedUser(null);

            loadUsers();

        }catch(err){

            console.error(err);

        }

    }

    async function handleDelete(){

        try{

            await deleteUser(userToDelete.id);

            setOpenDelete(false);
            setUserToDelete(null);

            loadUsers();

        }catch(err){

            console.error(err);

        }

    }

    async function handlePromote(user){

        try{

            await promoteUser(user.id);

            loadUsers();

        }catch(err){

            console.error(err);

        }

    }

    async function handleDemote(user){

        try{

            await demoteUser(user.id);

            loadUsers();

        }catch(err){

            console.error(err);

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
                        Users
                    </Typography>

                    <Button
                        variant="contained"
                        onClick={()=>{

                            setSelectedUser(null);
                            setOpenDialog(true);

                        }}
                    >
                        Add User
                    </Button>

                </Box>

                <Paper>

                    {

                        loading ?

                        <Box
                            display="flex"
                            justifyContent="center"
                            p={5}
                        >

                            <CircularProgress/>

                        </Box>

                        :

                        <Table>

                            <TableHead>

                                <TableRow>

                                    <TableCell>ID</TableCell>
                                    <TableCell>Username</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Role</TableCell>
                                    <TableCell align="center">
                                        Actions
                                    </TableCell>

                                </TableRow>

                            </TableHead>

                            <TableBody>

                                {

                                    users.map(user=>(

                                        <TableRow key={user.id}>

                                            <TableCell>

                                                {user.id}

                                            </TableCell>

                                            <TableCell>

                                                {user.username}

                                            </TableCell>

                                            <TableCell>

                                                {user.email}

                                            </TableCell>

                                            <TableCell>

                                                {user.role}

                                            </TableCell>

                                            <TableCell>

                                                <Stack
                                                    direction="row"
                                                    spacing={1}
                                                >

                                                    <Button
                                                        size="small"
                                                        variant="outlined"
                                                        onClick={()=>{

                                                            setSelectedUser(user);
                                                            setOpenDialog(true);

                                                        }}
                                                    >
                                                        Edit
                                                    </Button>

                                                    <Button
                                                        size="small"
                                                        color="error"
                                                        variant="outlined"
                                                        onClick={()=>{

                                                            setUserToDelete(user);
                                                            setOpenDelete(true);

                                                        }}
                                                    >
                                                        Delete
                                                    </Button>

                                                    {

                                                        user.role==="USER" &&

                                                        <Button
                                                            size="small"
                                                            variant="contained"
                                                            onClick={()=>handlePromote(user)}
                                                        >
                                                            Promote
                                                        </Button>

                                                    }

                                                    {

                                                        user.role==="ADMIN" &&

                                                        <Button
                                                            size="small"
                                                            color="warning"
                                                            variant="contained"
                                                            onClick={()=>handleDemote(user)}
                                                        >
                                                            Demote
                                                        </Button>

                                                    }

                                                </Stack>

                                            </TableCell>

                                        </TableRow>

                                    ))

                                }

                            </TableBody>

                        </Table>

                    }

                </Paper>

            </Box>

            <UserDialog
                open={openDialog}
                user={selectedUser}
                onClose={()=>{

                    setOpenDialog(false);
                    setSelectedUser(null);

                }}
                onSave={handleSave}
            />

            <DeleteUserDialog
                open={openDelete}
                user={userToDelete}
                onClose={()=>{

                    setOpenDelete(false);
                    setUserToDelete(null);

                }}
                onDelete={handleDelete}
            />

        </DashboardLayout>

    );

}