import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Switch } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

function ToggleView({ isAdmin, onToggle, onLogout }) {
    return (
        <AppBar position="static" >
            <Toolbar style={{ justifyContent: 'space-between', backgroundColor: "#1b1616" }}>
                <Typography variant="h6" component="div">

                </Typography>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="body1" sx={{ mr: 2 }}>Admin</Typography>
                    <Switch checked={!isAdmin} onChange={onToggle} />
                    <Typography variant="body1" sx={{ mr: 2 }}>User</Typography>
                    <IconButton onClick={onLogout} >
                        <LogoutIcon />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default ToggleView;
