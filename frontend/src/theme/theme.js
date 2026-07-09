import { createTheme } from "@mui/material/styles";

const theme = createTheme({

    palette: {

        primary: {
            main: "#2563EB"
        },

        secondary: {
            main: "#1E40AF"
        },

        success: {
            main: "#16A34A"
        },

        error: {
            main: "#DC2626"
        },

        warning: {
            main: "#F59E0B"
        },

        background: {
            default: "#F8FAFC",
            paper: "#FFFFFF"
        }

    },

    typography: {
        fontFamily: "Roboto, sans-serif",

        h4: {
            fontWeight: 700
        },

        h5: {
            fontWeight: 700
        },

        h6: {
            fontWeight: 600
        },

        button: {
            textTransform: "none",
            fontWeight: 600
        }

    },

    shape: {
        borderRadius: 12
    }

});

export default theme;