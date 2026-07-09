import {useContext} from "react";
import {AuthContext} from "../../contexts/AuthContext";
import DashboardLayout from "../../layouts/DashboardLayout";

import {
Paper,
Typography,
Stack,
Avatar,
Divider,
Chip,
Button
} from "@mui/material";

export default function Profile(){

    const {user}=useContext(AuthContext);

    return(

        <DashboardLayout>

            <Paper sx={{p:5,maxWidth:700,mx:"auto"}}>

                <Stack
                    spacing={3}
                    alignItems="center"
                >

                    <Avatar
                        sx={{
                            width:100,
                            height:100,
                            fontSize:40
                        }}
                    >
                        {user?.username?.charAt(0).toUpperCase()}
                    </Avatar>

                    <Typography variant="h4">

                        {user?.username}

                    </Typography>

                    <Chip
                        label={user?.role}
                        color="primary"
                    />

                </Stack>

                <Divider sx={{my:4}}/>

                <Stack spacing={2}>

                    <Typography>

                        <strong>Username:</strong> {user?.username}

                    </Typography>

                    <Typography>

                        <strong>Role:</strong> {user?.role}

                    </Typography>

                    <Typography>

                        <strong>Session:</strong> Active

                    </Typography>

                </Stack>

                <Stack
                    direction="row"
                    spacing={2}
                    mt={4}
                >

                    <Button variant="contained">

                        Change Password

                    </Button>

                    <Button variant="outlined">

                        Edit Profile

                    </Button>

                </Stack>

            </Paper>

        </DashboardLayout>

    );

}