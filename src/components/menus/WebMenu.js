import * as React from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { styled } from '@mui/material/styles';
import {
  getPageRoute,
  formatUrl,
  getFontWeight,
  pages
} from '../../services/utility';

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

export default WebMenu;
