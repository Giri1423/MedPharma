import React from 'react';
import { AppBar, Button, Tabs, Toolbar, Typography, IconButton } from '@mui/material'
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import Link from '@mui/material/Link';



const Header = () => {
    return (
        <React.Fragment>
            <AppBar position="sticky" elevation={0}>
                <Toolbar>
                    <MedicalServicesIcon />
                    <Typography sx={{ padding: "10px" }}>Welcome to Med/Pharma</Typography>
                    <Tabs textColor='1px solid white'>
                        <Link href="/"><Typography sx={{ padding: "10px", color: "white" }}>Home</Typography></Link>
                        <Link href="/About"><Typography sx={{ padding: "10px", color: "white" }}>About</Typography></Link>
                        <Link href="/Contact"><Typography sx={{ padding: "10px", color: "white" }}>Contact</Typography></Link>
                    </Tabs>
                    <Button href="/login" variant="contained" sx={{ marginLeft: "43rem" }}>Login</Button>
                    <IconButton color="white" aria-label="add to shopping cart" sx={{marginLeft:"5px"}}>
                        <ShoppingCartSharpIcon /></IconButton>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Header;