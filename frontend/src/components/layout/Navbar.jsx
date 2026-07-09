import {
    AppBar,
    Toolbar,
    Typography,
    Avatar,
    Box
} from "@mui/material";

export default function Navbar(){

    const user=JSON.parse(localStorage.getItem("user"));

    return(

        <AppBar
            position="fixed"
            sx={{
                width:"calc(100% - 240px)",
                ml:"240px"
            }}
        >

            <Toolbar>

                <Typography
                    variant="h6"
                    sx={{flexGrow:1}}
                >

                    Product Management System

                </Typography>

                <Box
                    display="flex"
                    alignItems="center"
                    gap={2}
                >

                    <Typography>

                        {user?.username}

                    </Typography>

                    <Avatar>

                        {user?.username?.charAt(0).toUpperCase()}

                    </Avatar>

                </Box>

            </Toolbar>

        </AppBar>

    );

}