import DashboardLayout from "../../layouts/DashboardLayout";
import {
    Avatar,
    Box,
    Paper,
    Typography
} from "@mui/material";

export default function Profile(){

    return(

        <DashboardLayout>

            <Typography
                variant="h4"
                mb={3}
            >
                My Profile
            </Typography>

            <Paper sx={{ p:4 }}>

                <Avatar
                    sx={{
                        width:80,
                        height:80,
                        mb:2
                    }}
                >
                    A
                </Avatar>

                <Typography>

                    Username

                </Typography>

                <Typography>

                    Email

                </Typography>

                <Typography>

                    Role

                </Typography>

            </Paper>

        </DashboardLayout>

    );

}