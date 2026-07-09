import { useEffect, useState } from "react";
import { loadDashboardStats } from "../../services/dashboardService";

import DashboardLayout from "../../layouts/DashboardLayout";

import {
    Grid,
    Paper,
    Typography
} from "@mui/material";

export default function Dashboard() {

    const [stats, setStats] = useState({
        productCount: 0,
        userCount: 0,
        categoryCount: 0
    });

    useEffect(() => {

        async function load() {
            try {
                const data = await loadDashboardStats();
                setStats(data);

            } catch (error) {
                console.error("Failed to load dashboard statistics", error);
            }

        }

        load();

    }, []);

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

                    <Paper sx={{ p: 3 }}>

                        <Typography variant="h6">

                            Products

                        </Typography>

                        <Typography
                            variant="h3"
                            color="primary"
                        >

                            {stats.productCount}

                        </Typography>

                    </Paper>

                </Grid>

                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6">
                            Users
                        </Typography>

                        <Typography
                            variant="h3"
                            color="primary"
                        >
                            {stats.userCount}
                        </Typography>
                    </Paper>
                    
                </Grid>

                <Grid item xs={12} md={4}>

                    <Paper sx={{ p: 3 }}>

                        <Typography variant="h6">

                            Categories

                        </Typography>

                        <Typography
                            variant="h3"
                            color="primary"
                        >

                            {stats.categoryCount}

                        </Typography>

                    </Paper>

                </Grid>

            </Grid>

        </DashboardLayout>

    );

}