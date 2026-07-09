import {
    Box,
    Toolbar
} from "@mui/material";

import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

export default function DashboardLayout({children}){

    return(

        <Box
            sx={{
                display:"flex"
            }}
        >

            <Navbar/>

            <Sidebar/>

            <Box
                component="main"
                sx={{
                    flexGrow:1,
                    p:3
                }}
            >

                <Toolbar/>

                {children}

            </Box>

        </Box>

    );

}