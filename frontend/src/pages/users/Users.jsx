import DashboardLayout from "../../layouts/DashboardLayout";

import {
    Box,
    Typography,
    Button
} from "@mui/material";

export default function Users(){

    return(

        <DashboardLayout>

            <Box
                display="flex"
                justifyContent="space-between"
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
                >
                    Register User
                </Button>

            </Box>

            <Typography>

                User management table goes here.

            </Typography>

        </DashboardLayout>

    );

}