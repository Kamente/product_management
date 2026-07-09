import {
    Drawer,
    Toolbar,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import InventoryIcon from "@mui/icons-material/Inventory2";
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

import { Link, useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 240;

export default function Sidebar() {

    const location = useLocation();
    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/login");

    };

    const menu = [

        {
            text:"Dashboard",
            icon:<DashboardIcon />,
            path:"/dashboard"
        },

        {
            text:"Products",
            icon:<InventoryIcon />,
            path:"/products"
        },

        {
            text:"Users",
            icon:<PeopleIcon />,
            path:"/users"
        },

        {
            text:"Profile",
            icon:<PersonIcon />,
            path:"/profile"
        }

    ];

    return(

        <Drawer
            variant="permanent"
            sx={{
                width:drawerWidth,
                flexShrink:0,

                "& .MuiDrawer-paper":{

                    width:drawerWidth,
                    boxSizing:"border-box"

                }

            }}
        >

            <Toolbar />

            <List>

                {

                    menu.map(item=>(

                        <ListItemButton

                            key={item.text}

                            component={Link}

                            to={item.path}

                            selected={location.pathname===item.path}

                        >

                            <ListItemIcon>

                                {item.icon}

                            </ListItemIcon>

                            <ListItemText primary={item.text}/>

                        </ListItemButton>

                    ))

                }

                <ListItemButton onClick={logout}>

                    <ListItemIcon>

                        <LogoutIcon/>

                    </ListItemIcon>

                    <ListItemText primary="Logout"/>

                </ListItemButton>

            </List>

        </Drawer>

    );

}