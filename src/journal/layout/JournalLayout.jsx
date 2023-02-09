// Material UI
import { Box, Toolbar } from "@mui/material"

// Navigation Bars
import { NavBar, SideBar } from "../components";


const drawerWidth = 240;

export const JournalLayout = ({children}) => {
    return (
        <Box sx={{display: 'flex'}} className="animate__animated animate__fadeIn animate__faster">
            {/* Navbar */}
            <NavBar drawerWidth={drawerWidth} />

            {/* Sidebar */}
            <SideBar drawerWidth={drawerWidth} />

            <Box 
                component='main'
                sx={{flexGrow: 1, p: 2.9}}
            >
                <Toolbar />

                { children }
            </Box>
        </Box>
    )
}
