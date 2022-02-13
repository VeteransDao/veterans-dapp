import * as React from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SocialButtons from '../social/SocialButtons';
import { getPageRoute, formatUrl, pages } from '../../services/utility';

const MobileMenu = () => {
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const navClick = route => {
    handleCloseNavMenu();
    router.push(formatUrl(route));
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
          '& .MuiPaper-root': {
            width: '100vw',
            height: '100vh',
            marginTop: '36px',
            textAlign: 'center'
          },
          display: { xs: 'block', md: 'none' }
        }}
      >
        <MenuItem key="vetdao logo" sx={{ justifyContent: 'center' }}>
          <Typography
            variant="h5"
            noWrap
            component="h5"
            sx={{
              fontFamily: 'Trade Winds'
            }}
          >
            veterans dao
          </Typography>
        </MenuItem>
        {pages.map(page => {
          const pageRoute = getPageRoute(page);
          if (page.subItems) {
            const pageItem = [
              <MenuItem
                key={page.id}
                sx={{
                  justifyContent: 'center',
                  marginBottom: '-16px',
                  fontSize: '0.8em',
                  opacity: '0.5'
                }}
              >
                <Typography textAlign="center">{page.id}</Typography>
              </MenuItem>
            ];
            const subItems = page.subItems.map(item => {
              return (
                <MenuItem
                  key={item}
                  onClick={() => navClick(`/${pageRoute}/${item}`)}
                  sx={{ justifyContent: 'center' }}
                >
                  <Typography textAlign="center">{item}</Typography>
                </MenuItem>
              );
            });
            const items = pageItem.concat(subItems);
            return items;
          }
          return (
            <MenuItem
              key={page.id}
              onClick={() => navClick(`/${pageRoute}`)}
              sx={{ justifyContent: 'center' }}
            >
              <Typography textAlign="center">{page.id}</Typography>
            </MenuItem>
          );
        })}
        <MenuItem sx={{ justifyContent: 'center' }}>
          <SocialButtons show={true} />
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default MobileMenu;
