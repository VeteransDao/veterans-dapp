import * as React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { styled } from '@mui/material/styles';
import DiscordLite from '../../public/images/discord-light.png';
import TwitterLite from '../../public/images/twitter-light.png';
import InstagramLite from '../../public/images/instagram-light.png';
import OpenseaLite from '../../public/images/opensea-light.png';

const pages = [
  { id: 'HOME', path: '/' },
  {
    id: 'COLLECTIONS',
    subItems: ['US FIGHTER SERIES', 'AIR MEDAL'],
    path: '/collections'
  },
  {
    id: 'GUIDES',
    subItems: ['MINTING', 'ROLLOUT', 'FAQS', 'CONTACT'],
    path: '/guides'
  }
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

const SocialButtons = () => {
  return (
    <Stack direction="row" sx={{ marginRight: '16px' }}>
      <IconButton
        aria-label="discord button"
        color="primary"
        onClick={() => console.log('discord')}
      >
        <Image src={DiscordLite} alt="discord image" width={24} height={27} />
      </IconButton>
      <IconButton
        aria-label="twitter button"
        color="primary"
        onClick={() => console.log('twitter')}
      >
        <Image src={TwitterLite} alt="twitter image" width={20} height={16} />
      </IconButton>
      <IconButton
        aria-label="instagram button"
        color="primary"
        onClick={() => console.log('instagram')}
      >
        <Image
          src={InstagramLite}
          alt="instagram image"
          width={20}
          height={20}
        />
      </IconButton>
      <IconButton
        aria-label="opensea button"
        color="primary"
        onClick={() => console.log('opensea')}
      >
        <Image src={OpenseaLite} alt="opensea image" width={22} height={22} />
      </IconButton>
    </Stack>
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

const formatUrl = raw => {
  return raw.toLowerCase().replace(/\s/g, '-');
};

const getFontWeight = page => {
  const router = useRouter();
  let fontWeight = 300;
  if (router.pathname == page.path) {
    fontWeight = 500;
  } else if (page.subItems) {
    if (router.pathname.startsWith(page.path)) {
      fontWeight = 500;
    }
  }
  return fontWeight;
};

// Home goes to route /, Others to ID
const getPageRoute = page => {
  const pageRoute = page.id === 'HOME' ? '' : page.id;
  return pageRoute;
};

const SubItemMenu = ({ page }) => {
  const router = useRouter();
  const pageRoute = getPageRoute(page);
  const fontWeight = getFontWeight(page);
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
                    onClick={() =>
                      router.push(formatUrl(`/${pageRoute}/${item}`))
                    }
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
          {formatUrl(pageRoute)}
        </Button>
      </HtmlTooltip>
    </Box>
  );
};

const SingleItemMenu = ({ page }) => {
  const router = useRouter();
  const pageRoute = getPageRoute(page);
  const fontWeight = getFontWeight(page);
  return (
    <Button
      key={page.id}
      onClick={() => router.push(`/${formatUrl(pageRoute)}`)}
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
};

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

const WebMenu = () => {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {pages.map(page => {
        return page.subItems ? (
          <SubItemMenu page={page} key={page.id} />
        ) : (
          <SingleItemMenu page={page} key={page.id} />
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
          <SocialButtons />
          <WalletConnect />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
