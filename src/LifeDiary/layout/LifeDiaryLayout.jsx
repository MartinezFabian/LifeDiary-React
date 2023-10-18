import { Box, Toolbar } from '@mui/material';

import { useState } from 'react';

import { Navbar } from '../components/Navbar';
import { SideBar } from '../components/SideBar';

const drawerWidth = 280;

export const LifeDiaryLayout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle}></Navbar>

      <SideBar
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      ></SideBar>

      <Box
        component="main"
        sx={{ flexGrow: 1, padding: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />

        {children}
      </Box>
    </Box>
  );
};
