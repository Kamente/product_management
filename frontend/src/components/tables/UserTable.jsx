import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    IconButton,
    Chip
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SecurityIcon from "@mui/icons-material/Security";

export default function UserTable({
    users,
    page,
    rowsPerPage,
    totalElements,
    onPageChange,
    onRowsPerPageChange,
    onEdit,
    onDelete,
    onPromote
}) {

    return (

        <>
            <Table>

                <TableHead>

                    <TableRow>

                        <TableCell>ID</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Role</TableCell>
                        <TableCell align="center">Actions</TableCell>

                    </TableRow>

                </TableHead>

                <TableBody>

                    {users.map(user => (

                        <TableRow key={user.id}>

                            <TableCell>{user.id}</TableCell>                
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>

                                <Chip
                                    label={user.role}
                                    color={
                                        user.role === "ADMIN"
                                            ? "error"
                                            : "primary"
                                    }
                                />

                            </TableCell>

                            <TableCell align="center">
                                <IconButton
                                    color="primary"
                                    onClick={() => onEdit(user)}
                                >
                                    <EditIcon />
                                </IconButton>
                                <IconButton
                                    color="success"
                                    onClick={() => onPromote(user)}
                                >
                                    <SecurityIcon />
                                </IconButton>

                                <IconButton
                                    color="error"
                                    onClick={() => onDelete(user)}
                                >
                                    <DeleteIcon />
                                </IconButton>

                            </TableCell>

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