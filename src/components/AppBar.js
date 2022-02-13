import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import SocialButtons from './social/SocialButtons';
import MobileMenu from './menus/MobileMenu';
import WebMenu from './menus/WebMenu';

const VetDaoLogo = () => {
  return (
    <Typography
      variant="h5"
      noWrap
      component="h5"
      sx={{
        mr: 2,
        display: { xs: 'none', md: 'flex' },
        fontFamily: 'Trade Winds'
      }}
    >
      veterans dao
    </Typography>
  );
};

const WalletConnect = () => {
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Button
        variant="outlined"
        sx={{
          width: '160px',
          color: '#fff',
          fontWeight: 300,
          border: '1px solid rgba(255, 255, 255, 0.5)',
          '&:hover': {
            border: '1px solid rgba(255, 255, 255, 1)',
            fontWeight: 500
          }
        }}
        onClick={() => {
          console.log('Launch metamask connect (in App)');
        }}
      >
        Connect Wallet
      </Button>
    </Box>
  );
};

const ResponsiveAppBar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <VetDaoLogo />
          <MobileMenu />
          <WebMenu />
          <SocialButtons />
          <WalletConnect />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
