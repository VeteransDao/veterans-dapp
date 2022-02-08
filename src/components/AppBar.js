import * as React from 'react';
import { useRouter } from 'next/router';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { styled } from '@mui/material/styles';

const pages = [
  { id: 'HOME', path: '/' },
  { id: 'COLLECTIONS', subItems: ['US FIGHTER SERIES', 'AIR MEDAL'] },
  { id: 'GUIDES', subItems: ['MINTING', 'ROLLOUT', 'FAQS'] }
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

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

const MobileMenu = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const navClick = page => {
    handleCloseNavMenu();
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: 'flex', md: 'none' }
      }}
    >
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: 'block', md: 'none' }
        }}
      >
        {pages.map(page => {
          if (page.subItems) {
            return (
              <MenuItem key={page.id} onClick={() => navClick(page)}>
                <Typography textAlign="center">{page.id}</Typography>
              </MenuItem>
            );
          }
          return (
            <MenuItem key={page.id} onClick={() => navClick(page)}>
              <Typography textAlign="center">{page.id}</Typography>
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
};

const MobileLogo = () => {
  return (
    <Typography
      variant="h6"
      noWrap
      component="div"
      sx={{
        flexGrow: 1,
        display: { xs: 'flex', md: 'none', fontFamily: 'Trade Winds' }
      }}
    >
      Vet DAO
    </Typography>
  );
};

const WalletConnect = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map(setting => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

const WebMenu = () => {
  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#1e2125',
      maxWidth: 220,
      border: 'none',
      padding: '0px',
      margin: '0px !important'
    }
  }));
  const router = useRouter();
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {pages.map(page => {
        let fontWeight = 300;
        if (router.pathname == page.path) {
          fontWeight = 500;
        }
        if (page.subItems) {
          return (
            <Box sx={{ flexGrow: 0 }} key={page.id}>
              <HtmlTooltip
                title={
                  <React.Fragment>
                    <MenuList
                      sx={{
                        mt: '',
                        boxShadow: 'none',
                        padding: '0px'
                      }}
                      id="menu-appbar"
                    >
                      {page.subItems.map(item => {
                        return (
                          <MenuItem
                            key={item}
                            onClick={() => console.log('click')}
                          >
                            <Typography
                              textAlign="center"
                              sx={{
                                fontWeight: 300,
                                color: '#fff',
                                fontSize: '0.875rem',
                                '&:hover': {
                                  fontWeight: 500
                                }
                              }}
                            >
                              {item}
                            </Typography>
                          </MenuItem>
                        );
                      })}
                    </MenuList>
                  </React.Fragment>
                }
              >
                <Button
                  key={page.id}
                  sx={{
                    my: 2,
                    color: 'white',
                    display: 'block',
                    fontWeight: fontWeight
                  }}
                >
                  {page.id}
                </Button>
              </HtmlTooltip>
            </Box>
          );
        }
        return (
          <Button
            key={page.id}
            onClick={() => console.log('button') /*handleCloseNavMenu*/}
            sx={{
              my: 2,
              color: 'white',
              display: 'block',
              fontWeight: fontWeight,
              '&:hover': {
                fontWeight: 500
              }
            }}
          >
            {page.id}
          </Button>
        );
      })}
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
          <MobileLogo />
          <WebMenu />
          <WalletConnect />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
