import DashboardLayout from "../../layouts/DashboardLayout";
import {
    Box,
    Grid,
    Paper,
    Typography
} from "@mui/material";

export default function Dashboard() {

    return (

        <DashboardLayout>

            <Typography
                variant="h4"
                fontWeight="bold"
                mb={4}
            >
                Dashboard
            </Typography>

            <Grid container spacing={3}>

                <Grid item xs={12} md={4}>
                    <Paper sx={{ p:3 }}>
                        <Typography variant="h6">
                            Products
                        </Typography>

                        <Typography
                            variant="h3"
                            color="primary"
                        >
                            0
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Paper sx={{ p:3 }}>
                        <Typography variant="h6">
                            Users
                        </Typography>

                        <Typography
                            variant="h3"
                            color="primary"
                        >
                            0
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Paper sx={{ p:3 }}>
                        <Typography variant="h6">
                            Categories
                        </Typography>

                        <Typography
                            variant="h3"
                            color="primary"
                        >
                            0
                        </Typography>
                    </Paper>
                </Grid>

            </Grid>

        </DashboardLayout>

    );

}