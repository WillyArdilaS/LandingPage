import { createTheme } from "@mui/material";

export const MyTheme = createTheme({
    palette: {
        primary: {
            main: "#F1A54A",
            hover: "#D19041"
        },

        secondary: {
            main: "#852B0F"
        },

        black: {
            main: "#090A0A",
            hover: "#171A1A"
        },

        white: {
            main: "#F1F1F1"
        }
    },

    shadows: {
        card: "10px 10px 1px 0px rgba(9,10,10,0.2)",
        button: "6px 6px 1px 0px rgba(9,10,10,0.2)"
    }
})