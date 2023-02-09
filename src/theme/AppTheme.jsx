// Material UI
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

// Themes
import { purpleTheme } from "./";


export const AppTheme = ({children}) => {
    return (
        <ThemeProvider theme={purpleTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}
